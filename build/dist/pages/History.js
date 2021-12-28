import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import {useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import {
  getMemos,
  getMemoPageCount
} from "../indexeddb/memos.js";
import {Header} from "../components/Header.js";
import {Footer} from "../components/Footer.js";
import {Button} from "../components/Button.js";
export const History = (props) => {
  const history = useHistory();
  const {setText} = props;
  const [memos, setMemos] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  useEffect(() => {
    getMemos(1).then(setMemos);
    getMemoPageCount().then(setMaxPage);
  }, []);
  const canNextPage = page < maxPage;
  const canPrevPage = page > 1;
  const movePage = (targetPage) => {
    if (targetPage < 1 || maxPage < targetPage) {
      return;
    }
    setPage(targetPage);
    getMemos(targetPage).then(setMemos);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, {
    title: "Markdown Editor"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => history.push("/editor")
  }, "Return to editor")), /* @__PURE__ */ React.createElement("main", {
    id: "Main",
    className: "main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "historyContainer"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "heading1"
  }, "History"), /* @__PURE__ */ React.createElement("ul", {
    className: "historyList"
  }, memos.map((memo) => /* @__PURE__ */ React.createElement("li", {
    key: memo.datetime,
    onClick: () => {
      setText(memo.text);
      history.push("/editor");
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "history"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "history__title"
  }, memo.title), /* @__PURE__ */ React.createElement("p", {
    className: "history__text"
  }, memo.text))))), /* @__PURE__ */ React.createElement("div", {
    className: "pager"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "pager__prev",
    onClick: () => movePage(page - 1),
    disabled: !canPrevPage
  }, "<"), page, " / ", maxPage, /* @__PURE__ */ React.createElement("button", {
    className: "pager__next",
    onClick: () => movePage(page + 1),
    disabled: !canNextPage
  }, ">")))), /* @__PURE__ */ React.createElement(Footer, null, "Footer"));
};
