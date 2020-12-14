export interface IVesselState {
  loading: boolean;
  error: string | null;
  data: [];
  meta: Record<string, unknown>;
  total: string;
  next_page: number;
  per_page: string;
  selectedVessel: Record<string, any>;
}

export enum VesselActions {
  FETCH_ALL = "[vessel] fetch all",
  FETCH_ALL_SUCCESS = "[vessel] fetch all success",
  FETCH_ALL_FAILED = "[vessel] fetch all failed",
}

export interface IFetchAllSuccessAction {
  type: VesselActions.FETCH_ALL_SUCCESS;
}

export interface IFetchAllFailedAction {
  type: VesselActions.FETCH_ALL_FAILED;
  payload: { error: string };
}

export interface IFetchAllAction {
  type: VesselActions.FETCH_ALL;
  payload: {
    onStart: () => void;
    onSuccess: () => void;
    onError: (e) => void;
    params: Record<"imos", number>;
  };
}

export type VesselActionTypes =
  | IFetchAllSuccessAction
  | IFetchAllFailedAction
  | IFetchAllAction;
