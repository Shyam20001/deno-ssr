// build.js
import { build } from "https://deno.land/x/esbuild@v0.14.23/mod.js";

build({
  entryPoints: ["client.jsx"],
  bundle: true,
  outfile: "static/client.js",
  platform: "browser",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  loader: { ".js": "jsx" },
}).catch(() => process.exit(1));
