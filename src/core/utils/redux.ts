import { conformsTo, isFunction, isObject } from "lodash";
import { InjectedStore } from "types/redux";

export function invariant(cond: boolean, error: string) {
  if (!cond && process.env.NODE_ENV !== "production") {
    throw new Error(error);
  }
}

export default function checkStore({
  dispatch,
  subscribe,
  ...store
}: InjectedStore) {
  const shape = {
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
  };

  invariant(
    conformsTo(dispatch, isFunction) &&
      conformsTo(subscribe, isFunction) &&
      conformsTo(store, shape),
    "Injectors: Expected a valid redux store"
  );
}
