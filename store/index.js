import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import logger from "redux-logger";

// FUNCTION TO BIND MIDDLEWARE
const bindMiddleware = (middleware) => {
  // if (process.env.NEXT_PUBLIC_ENV !== "PROD") {
  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools(applyMiddleware(...middleware));
  // }
  return applyMiddleware(...middleware);
};

// SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// STORE
export const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

store.sagaTask = sagaMiddleware.run(rootSaga);

// JUST A FUNCTION TO RETURN STORE AS createWrapper ONLY ACCEPTS FUNCTION
// const makeStore = () => store;

// NEXT-REDUX WRAPPER
// export const wrapper = createWrapper(makeStore, { debug: true });
