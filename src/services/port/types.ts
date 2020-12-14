export interface IPortState {
  loading: boolean;
  error: string | null;
  data: [];
  meta: Record<string, unknown>;
  total: string;
  next_page: number;
  per_page: string;
  selectedPort: Record<string, unknown>;
}

export enum PortActions {
  FETCH_ALL = "[port] fetch all",
  FETCH_ALL_SUCCESS = "[port] fetch all success",
  FETCH_ALL_FAILED = "[port] fetch all failed",
}

export interface IFetchAllSuccessAction {
  type: PortActions.FETCH_ALL_SUCCESS;
}

export interface IFetchAllFailedAction {
  type: PortActions.FETCH_ALL_FAILED;
  payload: { error: string };
}

export interface IFetchAllAction {
  type: PortActions.FETCH_ALL;
  payload: {
    onStart: () => void;
    onSuccess: () => void;
    onError: (e) => void;
  };
}

export type PortActionTypes =
  | IFetchAllSuccessAction
  | IFetchAllFailedAction
  | IFetchAllAction;
