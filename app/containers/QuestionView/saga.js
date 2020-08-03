import { call, put, takeLatest } from 'redux-saga/effects';
import sender from '../../utils/sender';
import * as types from './constants';
import { BASE_URL } from '../../utils/url';
import { getQuestionFail, getQuestionSuccess } from './actions';

export function* getQuestion(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/question/${action.query}`,
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

export default function* questionPageSaga() {
  yield takeLatest(types.GET_QUESTION, getQuestion);
}
