import { call, put, takeLatest } from 'redux-saga/effects';
import sender from '../../utils/sender';
import serialize from '../../utils/serialize';
import {
  createQuestionFail,
  createQuestionSuccess,
  editQuestionFail,
  editQuestionSuccess,
  deleteQuestionFail,
  deleteQuestionSuccess,
  getQuestionFail,
  getQuestionSuccess,
} from './actions';
import * as types from './constants';
import { BASE_URL } from '../../utils/url';
let lastQuery = {};

export function* getQuestion(action) {
  try {
    const newQuery = action.query;
    lastQuery = { ...lastQuery, ...newQuery };
    const data = yield call(sender, {
      url: `${BASE_URL}/question?${serialize(lastQuery)}`,
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

export function* createQuestion(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/question`,
      method: 'POST',
      data: action.actions,
    });
    if (data) {
      yield put(createQuestionSuccess());
      yield put({
        type: types.GET_QUESTION,
      });
    } else {
      yield put(createQuestionFail());
    }
  } catch (failed) {
    yield put(createQuestionFail());
  }
}

export function* deleteQuestion(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/question/${action.actions}`,
      method: 'DELETE',
    });
    if (data) {
      yield put(deleteQuestionSuccess());
      yield put({
        type: types.GET_QUESTION,
      });
    } else {
      yield put(deleteQuestionFail());
    }
  } catch (failed) {
    yield put(deleteQuestionFail());
  }
}

export function* editQuestion(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/question/${action.actions._id}`,
      method: 'PUT',
      data: action.actions,
    });
    if (data) {
      yield put(editQuestionSuccess());
      yield put({
        type: types.GET_QUESTION,
      });
    } else {
      yield put(editQuestionFail());
    }
  } catch (failed) {
    yield put(editQuestionFail());
  }
}

export default function* questionPageSaga() {
  yield takeLatest(types.GET_QUESTION, getQuestion);
  yield takeLatest(types.CREATE_QUESTION, createQuestion);
  yield takeLatest(types.DELETE_QUESTION, deleteQuestion);
  yield takeLatest(types.EDIT_QUESTION, editQuestion);
}
