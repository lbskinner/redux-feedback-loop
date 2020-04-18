import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = {}, action) => {
  if (action.type === "SET_FEELING") {
    return { ...action.payload };
  }
  if (action.type === "RESET_FEEDBACK") {
    return {};
  }
  return state;
};

const understandingReducer = (state = {}, action) => {
  if (action.type === "SET_UNDERSTANDING") {
    return { ...action.payload };
  }
  if (action.type === "RESET_FEEDBACK") {
    return {};
  }
  return state;
};

const supportReducer = (state = {}, action) => {
  if (action.type === "SET_SUPPORT") {
    return { ...action.payload };
  }
  if (action.type === "RESET_FEEDBACK") {
    return {};
  }
  return state;
};

const commentsReducer = (state = {}, action) => {
  if (action.type === "SET_COMMENTS") {
    return { ...action.payload };
  }
  if (action.type === "RESET_FEEDBACK") {
    return {};
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
