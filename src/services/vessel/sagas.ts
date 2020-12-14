import { all, call, put, takeLatest } from "redux-saga/effects";
import vesselServices from "services/vessel/api";
import { get } from "lodash";
import { BaseFunctions, fetchAllSuccess, fetchAllFailed } from "./actions";
import { VesselActions, IFetchAllAction } from "./types";

export function* fetchAll({ payload }: IFetchAllAction) {
  const { onStart, onSuccess, onError, params } = payload;
  onStart();
  try {
    const {
      data: { data },
    } = yield call(vesselServices.fetchAll, params);

    yield put(BaseFunctions.setState({ data }));

    yield put(fetchAllSuccess());
    onSuccess();
  } catch (e) {
    onError(e);
    yield put(fetchAllFailed({ error: get(e, "data.message") }));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(VesselActions.FETCH_ALL, fetchAll)]);
}
