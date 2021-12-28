import React from "../_snowpack/pkg/react.js";
import {
  HashRouter as Router,
  Route,
  Redirect
} from "../_snowpack/pkg/react-router-dom.js";
import {useStateWithStorage} from "./hooks/use_state_with_storage.js";
import "./App.css.proxy.js";
import {Editor} from "./pages/Editor.js";
import {History} from "./pages/History.js";
const StorageKey = "/editor:text";
export const App = () => {
  const [text, setText] = useStateWithStorage("", StorageKey);
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/editor"
  }, /* @__PURE__ */ React.createElement(Editor, {
    text,
    setText
  })), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/history"
  }, /* @__PURE__ */ React.createElement(History, {
    setText
  })), /* @__PURE__ */ React.createElement(Redirect, {
    to: "/editor",
    path: "*"
  }));
};
