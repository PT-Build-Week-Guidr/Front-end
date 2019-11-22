import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, bindActionCreators } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "../src/API/reducer"
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

import './index.css';

const store = createStore(reducer, applyMiddleware(thunk, logger));
console.log(store.getState())


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
