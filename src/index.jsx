import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App.tsx";


window.addEventListener("load", () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("react_root")
  );
});
