import { call, put, takeLatest } from 'redux-saga/effects';
import sender from '../../utils/sender';
import serialize from '../../utils/serialize';
import { BASE_URL } from '../../utils/url';
import {
  getCheckinFail,
  getCheckinSuccess,
  createCheckinSuccess,
  createCheckinFail,
  deleteCheckinSuccess,
  deleteCheckinFail,
  editCheckinSuccess,
  editCheckinFail,
} from './actions';
import * as types from './constants';
import { changeSnackbar } from '../Dashboard/actions';
var lastQuery = {};

export function* getCheckin(action) {
  try {
    const newQuery = action.query;
    lastQuery = { ...lastQuery, ...newQuery };
    const data = yield call(sender, {
      url: `${BASE_URL}/checkin?${serialize(lastQuery)}`,
      method: 'GET',
    });
    if (data) {
      yield put(getCheckinSuccess(data.data));
    } else {
      yield put(getCheckinFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Lấy dữ liệu thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(getCheckinFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Lấy dữ liệu thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* createCheckin(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/checkin`,
      method: 'POST',
      data: action.actions,
    });
    if (data) {
      yield put(createCheckinSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: types.GET_CHECKIN,
      });
    } else {
      yield put(createCheckinFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(createCheckinFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* deleteCheckin(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/checkin/${action.actions}`,
      method: 'DELETE',
    });
    if (data) {
      yield put(deleteCheckinSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: types.GET_CHECKIN,
      });
    } else {
      yield put(deleteCheckinFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(deleteCheckinFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* editCheckin(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/checkin/${action.actions._id}`,
      method: 'PUT',
      data: action.actions,
    });
    if (data) {
      yield put(editCheckinSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: types.GET_CHECKIN,
      });
    } else {
      yield put(editCheckinFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(editCheckinFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}
export default function* interviewPageSaga() {
  yield takeLatest(types.GET_CHECKIN, getCheckin);
  yield takeLatest(types.CREATE_CHECKIN, createCheckin);
  yield takeLatest(types.DELETE_CHECKIN, deleteCheckin);
  yield takeLatest(types.EDIT_CHECKIN, editCheckin);
}
