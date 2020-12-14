import genActions from "services/_base/actions";
import {
  IFetchAllSuccessAction,
  IFetchAllFailedAction,
  IFetchAllAction,
  PortActions,
} from "./types";

export const { funcs: BaseFunctions, types: BaseActions } = genActions("port");

export function fetchAll(payload): IFetchAllAction {
  return { type: PortActions.FETCH_ALL, payload };
}

export function fetchAllSuccess(): IFetchAllSuccessAction {
  return {
    type: PortActions.FETCH_ALL_SUCCESS,
  };
}

export function fetchAllFailed(payload: {
  error: string;
}): IFetchAllFailedAction {
  return {
    type: PortActions.FETCH_ALL_FAILED,
    payload,
  };
}
