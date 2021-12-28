import React, {useState} from "../../_snowpack/pkg/react.js";
import {Button} from "./Button.js";
export const SaveModal = (props) => {
  const {onSave, onCancel} = props;
  const [title, setTitle] = useState(new Date().toISOString());
  return /* @__PURE__ */ React.createElement("div", {
    className: "modal"
  }, /* @__PURE__ */ React.createElement("p", null, "テキストの内容を保存します。"), /* @__PURE__ */ React.createElement("p", null, "保存内容のタイトルを入力して「保存」ボタンを押してください。"), /* @__PURE__ */ React.createElement("p", {
    className: "modal__inputContainer"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "modal__input",
    type: "text",
    value: title,
    onChange: (event) => setTitle(event.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "modal__buttonContainer"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => onSave(title)
  }, "Save")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    onClick: onCancel,
    cancel: true
  }, "Cancel"))));
};
