// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    color: #ffffff;\n    font-size: 1.6rem;\n    background-color: #000000;\n    line-height: 1.2;\n}\n\nul, ol {\n    list-style: none;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\na:hover {\n    text-decoration: underline;\n}\n\nimg {\n    vertical-align: top;\n}\n\ninput {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    background: transparent;\n    border: none;\n    outline: none;\n}\n\ntextarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    resize: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    border: none;\n    outline: none;\n}\n\nbutton {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    background: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 80px;\n    padding: 20px;\n    border-bottom: solid #ffffff 1px;\n}\n.header__title {\n    font-size: 2.0rem;\n    font-weight: bold;\n}\n.header__control {\n    margin-left: 20px;\n}\n.header__control > * + * {\n    margin-left: 20px;\n}\n\n.main {\n    position: relative;\n    height: calc(100vh - 160px);\n}\n\n.footer {\n    height: 80px;\n    padding: 20px;\n    border-top: solid #ffffff 1px;\n}\n\n.heading1 {\n    font-size: 4.0rem;\n    font-weight: bold;\n    margin-bottom: 1em;\n}\n\n.button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    color: #000000;\n    font-weight: bold;\n    min-width: 200px;\n    min-height: 40px;\n    background-color: #ffffff;\n    border: solid #000000 1px;\n    transition: all 0.2s;\n}\n.button:hover {\n    color: #ffffff;\n    background-color: #000000;\n    border-color: #ffffff;\n}\n.button.cancel {\n    color: #ffffff;\n    background-color: #000000;\n}\n.button.cancel:hover {\n    color: #000000;\n    background-color: #ffffff;\n    border-color: #000000;\n}\n\n.modal {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    color: #000000;\n    padding: 20px;\n    background-color: #ffffff;\n    transform: translate(-50%, -50%);\n}\n.modal__inputContainer {\n    margin-top: 20px;\n}\n.modal__input {\n    width: 100%;\n    height: 40px;\n    padding: 0 20px;\n    border: solid #000000 1px;\n}\n.modal__buttonContainer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 20px;\n}\n.modal__buttonContainer > * {\n    padding: 0 10px;\n}\n\n.editorContainer {\n    display: flex;\n    height: 100%;\n}\n.editorContainer > * {\n    width: 50%;\n    padding: 20px;\n}\n.editorContainer > * + * {\n    border-left: solid #ffffff 1px;\n}\n\n.historyContainer {\n    height: 100%;\n    padding: 20px;\n}\n\n.historyList {\n    height: calc(100% - 128px);\n    overflow-y: auto;\n}\n.historyList > * {\n    transition: all 0.2s;\n    cursor: pointer;\n}\n.historyList > *:hover {\n    opacity: 0.7;\n}\n.historyList > * + * {\n    margin-top: 20px;\n}\n\n.history {\n    padding: 20px;\n    border: solid #ffffff 1px;\n}\n.history__title {\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n.history__text {\n    margin-top: 10px;\n}\n\n.pager {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n}\n.pager__prev {\n    margin-right: 10px;\n}\n.pager__prev:disabled {\n    opacity: 0.5;\n    cursor: auto;\n}\n.pager__next {\n    margin-left: 10px;\n}\n.pager__next:disabled {\n    opacity: 0.5;\n    cursor: auto;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}