import { forEach } from "core/utils/enum";

export interface IActions {
  SET_STATE: string;
  RESET_STATE: string;
}

const ACTIONS: IActions = {
  SET_STATE: "set state",
  RESET_STATE: "reset state",
};

enum ActionFunctionName {
  SET_STATE = "setState",
  RESET_STATE = "resetState",
}

type ReturnCommonFunction<T extends keyof IActions> = Record<
  ActionFunctionName,
  <Payload>(payload?: Payload) => { type: IActions[T]; payload: Payload }
>;

type GenActionReturn<T extends keyof IActions> = {
  funcs: ReturnCommonFunction<T>;
  types: { [key in T]: string };
};

const genActions = <T extends keyof IActions>(
  prefix: string
): GenActionReturn<T> => {
  const funcs: Partial<ReturnCommonFunction<T>> = {};
  const types = {};

  forEach(ActionFunctionName, ({ key, value }) => {
    const hasKey = Reflect.has(funcs, value);
    if (!hasKey) {
      const dispatchType = `${prefix} ${ACTIONS[key]}`;

      types[key] = dispatchType;

      funcs[value] = <Payload>(payload: Payload) => ({
        type: dispatchType,
        payload,
      });
    }
  });

  return { funcs, types } as GenActionReturn<T>;
};

export default genActions;
