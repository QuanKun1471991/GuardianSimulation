import produce from "immer";
import { Reducer } from "redux";
import genReducers from "services/_base/reducers";
import { BaseActions } from "./actions";
import { PortActions, PortActionTypes, IPortState } from "./types";

export const initialState: IPortState = {
  loading: false,
  error: "",
  data: [],
  total: "",
  next_page: 1,
  per_page: "",
  meta: {},
  selectedPort: {},
};

const portReducer: Reducer<IPortState, PortActionTypes> = (
  state = initialState,
  action
) => {
  return produce<IPortState>(state, (draft) => {
    switch (action.type) {
      case PortActions.FETCH_ALL: {
        draft.error = null;
        draft.loading = true;

        return draft;
      }
      case PortActions.FETCH_ALL_SUCCESS: {
        draft.loading = false;

        return draft;
      }
      case PortActions.FETCH_ALL_FAILED: {
        const { error } = action.payload;

        draft.loading = false;
        draft.error = error;

        return draft;
      }
      default:
        return genReducers(initialState, BaseActions)(state, action);
    }
  });
};

export default portReducer;
