import checkStore, { invariant } from "core/utils/redux";
import produce from "immer";
import { isEmpty, isFunction, isString } from "lodash";
import { Reducer } from "redux";
import createReducer from "services/reducers";
import { InjectedStore } from "types/redux";

export function injectReducerFactory(store: InjectedStore, isValid: boolean) {
  return function injectReducer(
    key: string | number | symbol,
    reducer: Reducer
  ) {
    if (!isValid) {
      checkStore(store);
    }

    invariant(
      isString(key) && !isEmpty(key) && isFunction(reducer),
      "(app/utils...) injectReducer: Expected `reducer` to be a reducer function"
    );

    if (
      Reflect.has(store?.injectedReducers || {}, key) &&
      store.injectedReducers?.[key] === reducer
    ) {
      return;
    }

    const newStore = produce(store, (draft) => {
      draft.injectedReducers[key] = reducer;
    });

    newStore.replaceReducer(createReducer(newStore.injectedReducers));
  };
}

export default function getInjectors(store: InjectedStore) {
  checkStore(store);

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
