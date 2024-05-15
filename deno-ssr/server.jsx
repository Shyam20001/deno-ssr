// server.jsx
import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.182.0/http/file_server.ts";
import { renderToString } from "https://esm.sh/react-dom@17.0.2/server";
import { join } from "https://deno.land/std@0.224.0/path/mod.ts";
import React from "https://esm.sh/react@17.0.2";
import App from "./components/App.jsx";

const PORT = 8000;

const kv = await Deno.openKv(Deno.env.get("DB_URL"));
async function getAllUsers() {
  const users = [];
  for await (const entry of kv.list({ prefix: ["users"] })) {
    users.push(entry.value);
  }
  return users;
}

const handler = async (req) => {
  const { pathname } = new URL(req.url, "http://localhost:8000/");

  // GET ALL
  if (req.method === "GET" && pathname === "") {
    const users = await getAllUsers();
    return new Response(JSON.stringify(users), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // POST
  if (req.method === "POST" && pathname === "/submit") {
    let requestData;
    try {
      requestData = await req.json();
    } catch (error) {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, gender, experience } = requestData;
    if (!name || !gender || !experience) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const user = { name, gender, experience: Number(experience) };
    await kv.set(["users", name], user);
    const users = await getAllUsers(); // Fetch updated list of users
    return new Response(JSON.stringify(users), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Serve static client.js file
  if (pathname === "/static/client.js") {
    return serveFile(req, join(Deno.cwd(), "static/client.js"));
  }

  // Serve static CSS file
  if (pathname === "/static/main.css") {
    return serveFile(req, join(Deno.cwd(), "static/client.css"));
  }

  // Render React app
  const app = renderToString(<App />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Deno SSR with React</title>
        <!-- Include Deno logo as title icon -->
        <link rel="icon" type="image/svg+xml" href="https://denolib.github.io/high-res-deno-logo/deno_hr_circle.png">
        <!-- Include link to CSS file -->
        <link rel="stylesheet" type="text/css" href="/static/main.css">
      </head>
      <body>
        <div id="root">${app}</div>
        <script type="module" src="/static/client.js"></script>
      </body>
    </html>
  `;
  return new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8" },
  });
};

console.log(`Server running on http://localhost:${PORT}`);
serve(handler, { port: PORT });
