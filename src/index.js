import React from "react";
import ReactDOM from "react-dom";
//import App from "./components/App";
import App from "./components/App";
//import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//import { ConnectedRouter } from "react-router-redux";
//import store from "./redux/configureStore";
import Store from "./redux/store";

ReactDOM.render(
  // <Provider store={store}>
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>,
  // </Provider>,
  document.getElementById("root")
);
