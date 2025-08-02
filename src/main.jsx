import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./GlobalStyle"; // 있으면

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
