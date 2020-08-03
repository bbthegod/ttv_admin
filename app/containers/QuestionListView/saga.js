import { call, put, takeLatest } from 'redux-saga/effects';
import sender from '../../utils/sender';
import * as types from './constants';
import { BASE_URL } from '../../utils/url';
import {
  getQuestionFail,
  getQuestionSuccess,
  getAllQuestionFail,
  getAllQuestionSuccess,
} from './actions';

export function* getQuestion(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/questionlist/${action.query}`,
      method: 'GET',
    });
    if (data) {
      yield put(getQuestionSuccess(data.data));
    } else {
      yield put(getQuestionFail());
    }
  } catch (failed) {
    yield put(getQuestionFail());
  }
}

export function* getAllQuestion(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/question`,
      method: 'GET',
    });
    if (data) {
      yield put(getAllQuestionSuccess(data.data));
    } else {
      yield put(getAllQuestionFail());
    }
  } catch (failed) {
    yield put(getAllQuestionFail());
  }
}

export default function* questionPageSaga() {
  yield takeLatest(types.GET_QUESTION, getQuestion);
  yield takeLatest(types.GET_ALL_QUESTION, getAllQuestion);
}
