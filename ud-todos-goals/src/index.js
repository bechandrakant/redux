import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ConnectedApp from "./components/App";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import middlewares from './middlewares'
import reducer from './reducers'

const store = createStore(reducer, middlewares)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);
