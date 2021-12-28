import React from "../../_snowpack/pkg/react.js";
export const Header = (props) => {
  return /* @__PURE__ */ React.createElement("header", {
    id: "Header",
    className: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header__title"
  }, props.title), /* @__PURE__ */ React.createElement("div", {
    className: "header__control"
  }, props.children));
};
