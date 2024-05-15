// client.tsx
import React from "https://esm.sh/react@17.0.2";
import { hydrate } from "https://esm.sh/react-dom@17.0.2";
import App from "./components/App.jsx";
import './main.css'

hydrate(<App />, document.getElementById("root"));
