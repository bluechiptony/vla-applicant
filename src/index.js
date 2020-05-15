import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

// import { Provider } from "react-redux";
// import * as serviceWorker from "./serviceWorker";
// import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />

    <ToastContainer autoClose={4000} />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
