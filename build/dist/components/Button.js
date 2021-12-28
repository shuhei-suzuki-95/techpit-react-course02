import React from "../../_snowpack/pkg/react.js";
export const Button = (props) => {
  return /* @__PURE__ */ React.createElement("button", {
    className: `button${props.cancel ? " cancel" : ""}`,
    onClick: props.onClick
  }, props.children);
};
