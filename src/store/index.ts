import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createEpicMiddleware } from "redux-observable";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import list from "./reducer";

const rootReducer = combineReducers({
  list
});

export type State = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {
  const epicMiddleware = createEpicMiddleware();
  // action as param
  const sagaMiddleware = createSagaMiddleware();

  const middlewareList = [
    thunkMiddleware,
    epicMiddleware,
    sagaMiddleware,
    promiseMiddleware
  ];
  const middleWareEnhancer = applyMiddleware(...middlewareList);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  // sagaMiddleware.run()

  return store;
}
