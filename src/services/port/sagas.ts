import { notification } from "antd";
import { all, call, put, takeLatest } from "redux-saga/effects";
import portServices from "services/port/api";
import { get } from "lodash";
import produce from "immer";
import { BaseFunctions, fetchAllSuccess, fetchAllFailed } from "./actions";
import { PortActions, IFetchAllAction } from "./types";

export function* fetchAll({ payload }: IFetchAllAction) {
  const { onStart, onSuccess, onError } = payload;
  const filter = { page: 1 };
  onStart();
  try {
    const {
      data: { data },
    } = yield call(portServices.fetchAll, filter);
    yield put(BaseFunctions.setState({ data }));

    yield put(fetchAllSuccess());
    onSuccess();
  } catch (e) {
    onError(e);
    yield put(fetchAllFailed({ error: get(e, "data.message") }));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(PortActions.FETCH_ALL, fetchAll)]);
}
