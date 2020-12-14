import { createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware, { Saga, Task } from "redux-saga";
import vesslSagas from "services/vessel/sagas";
import createReducer from "services/reducers";
import { IAppState, InjectedStore } from "types/redux";

export interface SagaStore extends Store {
  sagaTask?: Task;
  injectedReducers?: any;
  injectedSagas?: any;
  runSaga?(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

function createInjectorsEnhancer(params: any) {
  return (createInjectorStore: any) => (...args: any[]) => {
    const store = createInjectorStore(...args);

    return {
      ...store,
      createReducer: params.createReducer,
      runSaga: params.runSaga,
      injectedReducers: {}, // Reducer registry
      injectedSagas: {}, // Saga registry
    };
  };
}

function forceReducerReload({
  injectedReducers,
  replaceReducer,
}: InjectedStore) {
  replaceReducer(createReducer(injectedReducers));
}

const makeStore: MakeStore<IAppState> = () => {
  const composeEnhancers = compose;

  const sagaMiddleware = createSagaMiddleware();

  const composeMiddleware =
    process.env.NODE_ENV === "production" || !process.browser
      ? compose(applyMiddleware(sagaMiddleware))
      : compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger));

  const { run: runSaga } = sagaMiddleware;

  const enhancers = [
    composeMiddleware,
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store: SagaStore = createStore(
    createReducer(),
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {
    // vessel: { task: store.runSaga(vesslSagas, {}) },
  }; // Saga registry

  if (module.hot) {
    module.hot.accept("services/reducers", () => {
      forceReducerReload(store);
    });
  }

  return store;
};

export const ReduxWrapper = createWrapper<IAppState>(makeStore, {
  debug: process.env.REDUX_DEBUG === "true",
});
