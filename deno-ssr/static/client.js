(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // client.jsx
  var import_react_17_04 = __toESM(__require("https://esm.sh/react@17.0.2"));
  var import_react_dom_17_0 = __require("https://esm.sh/react-dom@17.0.2");

  // components/App.jsx
  var import_react_17_03 = __toESM(__require("https://esm.sh/react@17.0.2"));

  // components/Test.jsx
  var import_react_17_0 = __toESM(__require("https://esm.sh/react@17.0.2"));
  var ColorPicker = () => {
    const [color, setColor] = (0, import_react_17_0.useState)("#FFFFFF");
    const handleColorchange = (e) => setColor(e.target.value);
    return /* @__PURE__ */ import_react_17_0.default.createElement(import_react_17_0.default.Fragment, null, /* @__PURE__ */ import_react_17_0.default.createElement("div", {
      className: "Student"
    }, /* @__PURE__ */ import_react_17_0.default.createElement("h2", null, "Color Picker"), /* @__PURE__ */ import_react_17_0.default.createElement("div", {
      className: "color-display",
      style: { backgroundColor: color }
    }, /* @__PURE__ */ import_react_17_0.default.createElement("p", null, "Selected Color: ", /* @__PURE__ */ import_react_17_0.default.createElement("b", null, color))), /* @__PURE__ */ import_react_17_0.default.createElement("label", null, "Select a Color"), /* @__PURE__ */ import_react_17_0.default.createElement("input", {
      type: "color",
      value: color,
      onChange: (e) => handleColorchange(e),
      className: "selector"
    })));
  };
  var Test_default = ColorPicker;

  // components/Form.jsx
  var import_react_17_02 = __toESM(__require("https://esm.sh/react@17.0.2"));
  var Form = () => {
    const [formData, setFormData] = (0, import_react_17_02.useState)({ name: "", age: "", gender: "" });
    const [users, setUsers] = (0, import_react_17_02.useState)([]);
    const handleChange = ({ target: { name, value } }) => {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      fetchUsers();
    };
    const fetchUsers = async () => {
      const response = await fetch("/users");
      const data = await response.json();
      setUsers(data);
    };
    (0, import_react_17_02.useEffect)(() => {
      fetchUsers();
    }, []);
    return /* @__PURE__ */ import_react_17_02.default.createElement("div", null, /* @__PURE__ */ import_react_17_02.default.createElement("h1", null, "Deno SSR with React"), /* @__PURE__ */ import_react_17_02.default.createElement("form", {
      onSubmit: handleSubmit
    }, /* @__PURE__ */ import_react_17_02.default.createElement("div", null, /* @__PURE__ */ import_react_17_02.default.createElement("label", null, "Name: "), /* @__PURE__ */ import_react_17_02.default.createElement("input", {
      type: "text",
      name: "name",
      value: formData.name,
      onChange: handleChange,
      required: true
    })), /* @__PURE__ */ import_react_17_02.default.createElement("div", null, /* @__PURE__ */ import_react_17_02.default.createElement("label", null, "Age: "), /* @__PURE__ */ import_react_17_02.default.createElement("input", {
      type: "number",
      name: "age",
      value: formData.age,
      onChange: handleChange,
      required: true
    })), /* @__PURE__ */ import_react_17_02.default.createElement("div", null, /* @__PURE__ */ import_react_17_02.default.createElement("label", null, "Gender: "), /* @__PURE__ */ import_react_17_02.default.createElement("input", {
      type: "text",
      name: "gender",
      value: formData.gender,
      onChange: handleChange,
      required: true
    })), /* @__PURE__ */ import_react_17_02.default.createElement("button", {
      type: "submit"
    }, "Submit")), /* @__PURE__ */ import_react_17_02.default.createElement("h2", null, "Users"), /* @__PURE__ */ import_react_17_02.default.createElement("ul", null, users.map((user) => /* @__PURE__ */ import_react_17_02.default.createElement("li", {
      key: user.name
    }, user.name, " - ", user.age, " - ", user.gender))));
  };
  var Form_default = Form;

  // components/App.jsx
  var App = () => {
    return /* @__PURE__ */ import_react_17_03.default.createElement("div", null, /* @__PURE__ */ import_react_17_03.default.createElement("h1", null, "Hello from Deno and React SSR!"), /* @__PURE__ */ import_react_17_03.default.createElement("br", null), /* @__PURE__ */ import_react_17_03.default.createElement(Test_default, null), /* @__PURE__ */ import_react_17_03.default.createElement("br", null), /* @__PURE__ */ import_react_17_03.default.createElement(Form_default, null));
  };
  var App_default = App;

  // client.jsx
  (0, import_react_dom_17_0.hydrate)(/* @__PURE__ */ import_react_17_04.default.createElement(App_default, null), document.getElementById("root"));
})();
