import { SagaInjectionModes } from "core/constants/common";
import checkStore, { invariant } from "core/utils/redux";
import { conformsTo, isEmpty, isFunction, isString } from "lodash";
import { Saga } from "redux-saga";
import { GetInjectors, IAppState, InjectedStore } from "types/redux";

const checkKey = (key: keyof IAppState) =>
  invariant(
    isString(key) && !isEmpty(key),
    "(app/utils...) injectSaga: Expected `key` to be a non empty string"
  );

const checkDescriptor = (descriptor: {
  saga: Saga;
  mode: SagaInjectionModes;
}) => {
  const shape = {
    saga: isFunction,
    mode: (mode: string) => isString(mode),
  };
  invariant(
    conformsTo(descriptor, shape),
    "(app/utils...) injectSaga: Expected a valid saga descriptor"
  );
};

export function injectSagaFactory(store: InjectedStore, isValid: boolean) {
  return function injectSaga<T>(
    key: keyof IAppState,
    descriptor: { mode?: SagaInjectionModes; saga: Saga },
    args?: T
  ) {
    if (!isValid) {
      checkStore(store);
    }

    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || SagaInjectionModes.DAEMON,
    };
    const { saga, mode } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== "production") {
      const oldDescriptor = store.injectedSagas[key];
      // enable hot reloading of daemon and once-till-unmount sagas
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (
      !hasSaga ||
      (hasSaga &&
        mode !== SagaInjectionModes.DAEMON &&
        mode !== SagaInjectionModes.ONCE_TILL_UNMOUNT)
    ) {
      // eslint-disable-next-line no-param-reassign
      store.injectedSagas = {
        ...store.injectedSagas,
        [key]: {
          ...newDescriptor,
          task: store.runSaga?.(saga, args),
        },
      };
    }

    return store;
  };
}

export function ejectSagaFactory(store: InjectedStore, isValid: boolean) {
  return function ejectSaga(key: keyof IAppState) {
    if (!isValid) {
      checkStore(store);
    }

    checkKey(key);

    if (Reflect.has(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];

      if (descriptor.mode && descriptor.mode !== SagaInjectionModes.DAEMON) {
        descriptor.task.cancel();

        // Clean up in production; in development we need `descriptor.saga` for hot reloading
        if (process.env.NODE_ENV === "production") {
          // Need some value to be able to detect `ONCE_TILL_UNMOUNT` sagas in `injectSaga`
          store.injectedSagas[key] = "done"; // eslint-disable-line no-param-reassign
        }
      }
    }
    return store;
  };
}

export default function getInjectors(store: InjectedStore): GetInjectors {
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true),
  };
}
