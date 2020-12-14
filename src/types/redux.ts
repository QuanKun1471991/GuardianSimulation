import { SagaInjectionModes } from "core/constants/common";
import { Reducer, Store } from "redux";
import { Saga } from "redux-saga";
import { IVesselState } from "services/vessel/types";
import { ILayoutState } from "services/layout/types";
import { IPortState } from "../services/port/types";

export interface InjectedStore extends Store {
  injectedReducers?: any;
  injectedSagas?: any;
  runSaga?(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface IAppState {
  vessel: IVesselState;
  layout: ILayoutState;
  port: IPortState;
}

export interface InjectReducerParams {
  key: keyof IAppState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof IAppState;
  saga: Saga;
  mode?: SagaInjectionModes;
}

export interface GetInjectors {
  injectSaga: (
    key: keyof IAppState,
    descriptor: {
      mode?: SagaInjectionModes;
      saga: Saga<any[]>;
    },
    args?: any
  ) => void;
  ejectSaga: (key: keyof IAppState) => void;
}
