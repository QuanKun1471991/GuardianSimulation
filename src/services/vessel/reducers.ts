import produce from "immer";
import { Reducer } from "redux";
import genReducers from "services/_base/reducers";
import { BaseActions } from "./actions";
import { VesselActions, VesselActionTypes, IVesselState } from "./types";

export const initialState: IVesselState = {
  loading: false,
  error: "",
  data: [],
  total: "",
  next_page: 1,
  per_page: "",
  meta: {},
  selectedVessel: {
    id: null,
    name: null,
    imo: null,
    mmsi: null,
    simulationRoutes: {
      show: false,
      data: [],
      loading: false,
      update: false,
      error: null,
    },
  },
};

const vesselReducer: Reducer<IVesselState, VesselActionTypes> = (
  state = initialState,
  action
) => {
  return produce<IVesselState>(state, (draft) => {
    switch (action.type) {
      case VesselActions.FETCH_ALL: {
        draft.error = null;
        draft.loading = true;

        return draft;
      }
      case VesselActions.FETCH_ALL_SUCCESS: {
        draft.loading = false;

        return draft;
      }
      case VesselActions.FETCH_ALL_FAILED: {
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

export default vesselReducer;
