import ReactDOM from 'react-dom'
import App from './App.js'
import React from 'react'

import createSagaMiddleware from "redux-saga";
import reducer from "./Reducer/reducer";
import rootSaga from "./Sagas/sagas";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
      <App />
     </Provider>,
    document.getElementById("root")
  );