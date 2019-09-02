import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

const RootApp = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(RootApp, document.getElementById("root"));
