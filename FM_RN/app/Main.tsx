
import * as React from "react";
import { Provider } from "react-redux";
//import App from "./components/AppPresenter";
import App from "./Root";

import { configureStore } from "core";

export default () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
