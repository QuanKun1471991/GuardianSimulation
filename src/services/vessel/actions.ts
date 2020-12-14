import genActions from "services/_base/actions";
import {
  IFetchAllSuccessAction,
  IFetchAllFailedAction,
  IFetchAllAction,
  VesselActions,
} from "./types";

export const { funcs: BaseFunctions, types: BaseActions } = genActions(
  "vessel"
);

export function fetchAll(payload): IFetchAllAction {
  return { type: VesselActions.FETCH_ALL, payload };
}

export function fetchAllSuccess(): IFetchAllSuccessAction {
  return {
    type: VesselActions.FETCH_ALL_SUCCESS,
  };
}

export function fetchAllFailed(payload: {
  error: string;
}): IFetchAllFailedAction {
  return {
    type: VesselActions.FETCH_ALL_FAILED,
    payload,
  };
}
