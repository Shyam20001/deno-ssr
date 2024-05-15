// components/App.tsx
import React from "https://esm.sh/react@17.0.2";
import ColorPicker from "./Test.jsx";
import Form from "./Form.jsx";

const App = () => {
  return (
    <div>
      <h1>Hello from Deno and React SSR!</h1>
      <br />
      <ColorPicker/>
      <br />
      <Form/>
    </div>
  );
};

export default App;
