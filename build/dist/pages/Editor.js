import React, {useState} from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import ReactMarkdown from "../../_snowpack/pkg/react-markdown.js";
import {putMemo} from "../indexeddb/memos.js";
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {Button} from "../components/Button.js";
import {SaveModal} from "../components/SaveModal.js";
export const Editor = (props) => {
  const {text, setText} = props;
  const [showModal, setShowModal] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    title: "Markdown Editor"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setShowModal(true)
  }, "Save"), /* @__PURE__ */ React.createElement(Link, {
    to: "/history"
  }, "View history")), /* @__PURE__ */ React.createElement("main", {
    id: "Main",
    className: "main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "editorContainer"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("textarea", {
    value: text,
    placeholder: "Please enter the text.",
    onChange: (event) => setText(event.target.value)
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ReactMarkdown, null, text))), showModal && /* @__PURE__ */ React.createElement(SaveModal, {
    onSave: (title) => {
      putMemo(title, text);
      setShowModal(false);
    },
    onCancel: () => setShowModal(false)
  })), /* @__PURE__ */ React.createElement(Footer, null, "Footer"));
};
