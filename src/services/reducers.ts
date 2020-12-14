import { combineReducers } from "redux";
import vessel from "./vessel/reducers";
import port from "./port/reducers";
import layout from "./layout/reducers";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    vessel,
    port,
    layout,
    ...injectedReducers,
  });

  return rootReducer;
}
