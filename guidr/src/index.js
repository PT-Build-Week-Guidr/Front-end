import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./API/reducer/index";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import 'bootstrap/dist/css/bootstrap.css'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import './index.css';
// import * as serviceWorker from './serviceWorker';





const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
