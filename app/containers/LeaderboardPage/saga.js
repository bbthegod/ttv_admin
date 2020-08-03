import { call, put, takeLatest } from 'redux-saga/effects';
import sender from '../../utils/sender';
import serialize from '../../utils/serialize';
import { getPlayFail, getPlaySuccess } from './actions';
import * as types from './constants';
import { BASE_URL } from '../../utils/url';
import { changeSnackbar } from '../Dashboard/actions';
let lastQuery = {};

export function* getUser(action) {
  try {
    const newQuery = action.query;
    lastQuery = { ...lastQuery, ...newQuery };
    const data = yield call(sender, {
      url: `${BASE_URL}/play?${serialize(lastQuery)}`,
      method: 'GET',
    });
    if (data) {
      yield put(getPlaySuccess(data.data));
    } else {
      yield put(getPlayFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Lấy dữ liệu thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(getPlayFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Lấy dữ liệu thất bại',
        variant: 'error',
      }),
    );
  }
}

export default function* leaderboardPageSaga() {
  yield takeLatest(types.GET_PLAY, getUser);
}
