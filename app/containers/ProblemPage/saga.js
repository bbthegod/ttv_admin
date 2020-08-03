import { call, put, takeLatest } from 'redux-saga/effects';
import sender from '../../utils/sender';
import serialize from '../../utils/serialize';
import { BASE_URL } from '../../utils/url';
import {
  getProblemFail,
  getProblemSuccess,
  createProblemSuccess,
  createProblemFail,
  deleteProblemSuccess,
  deleteProblemFail,
  editProblemSuccess,
  editProblemFail,
} from './actions';
import * as types from './constants';
import { changeSnackbar } from '../Dashboard/actions';
let lastQuery = {};

export function* getProblem(action) {
  try {
    const newQuery = action.query;
    lastQuery = { ...lastQuery, ...newQuery };
    const data = yield call(sender, {
      url: `${BASE_URL}/problem?${serialize(lastQuery)}`,
      method: 'GET',
    });
    if (data) {
      yield put(getProblemSuccess(data.data));
    } else {
      yield put(getProblemFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Lấy dữ liệu thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(getProblemFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Lấy dữ liệu thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* createProblem(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/problem`,
      method: 'POST',
      data: action.actions,
    });
    if (data) {
      yield put(createProblemSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: types.GET_PROBLEM,
      });
    } else {
      yield put(createProblemFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(createProblemFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* deleteProblem(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/problem/${action.actions}`,
      method: 'DELETE',
    });
    if (data) {
      yield put(deleteProblemSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: types.GET_PROBLEM,
      });
    } else {
      yield put(deleteProblemFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(deleteProblemFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* editProblem(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/problem/${action.actions._id}`,
      method: 'PUT',
      data: action.actions,
    });
    if (data) {
      yield put(editProblemSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: types.GET_PROBLEM,
      });
    } else {
      yield put(editProblemFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(editProblemFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}

export default function* problemPageSaga() {
  yield takeLatest(types.GET_PROBLEM, getProblem);
  yield takeLatest(types.CREATE_PROBLEM, createProblem);
  yield takeLatest(types.DELETE_PROBLEM, deleteProblem);
  yield takeLatest(types.EDIT_PROBLEM, editProblem);
}
