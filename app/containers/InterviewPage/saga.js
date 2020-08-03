import { call, put, takeLatest } from 'redux-saga/effects';
import sender from '../../utils/sender';
import {
  getUserFail,
  getUserSuccess,
  interviewFail,
  interviewSuccess,
} from './actions';
import * as types from './constants';
import { BASE_URL } from '../../utils/url';

export function* getUser(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/play`,
      method: 'GET',
    });
    if (data) {
      yield put(getUserSuccess(data.data));
    } else {
      yield put(getUserFail());
    }
  } catch (failed) {
    yield put(getUserFail());
  }
}

export function* interview(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/play/interview/${action.data._id}`,
      method: 'POST',
      data: action.data,
    });
    if (data) {
      yield put(interviewSuccess(data.data));
      alert('Phỏng vấn thành công');
    } else {
      yield put(interviewFail());
    }
  } catch (failed) {
    yield put(interviewFail());
  }
}

export default function* interviewPageSaga() {
  yield takeLatest(types.GET_USER, getUser);
  yield takeLatest(types.INTERVIEW, interview);
}
