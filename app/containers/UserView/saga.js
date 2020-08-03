import { call, put, takeLatest } from 'redux-saga/effects';
import sender from '../../utils/sender';
import serialize from '../../utils/serialize';
import {
  getUserFail,
  getUserSuccess,
  createUserSuccess,
  createUserFail,
  deleteUserSuccess,
  deleteUserFail,
  editUserSuccess,
  editUserFail,
  getQuestionFail,
  getQuestionSuccess,
  resetFail,
  resetSuccess,
} from './actions';
import * as types from './constants';
import { GET_USER } from '../../containers/UserPage/constants';
import { BASE_URL } from '../../utils/url';
import { changeSnackbar } from '../Dashboard/actions';
export function* getUser(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/user/${action.query}`,
      method: 'GET',
    });
    if (data) {
      yield put(getUserSuccess(data.data));
    } else {
      yield put(getUserFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Lấy dữ liệu thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(getUserFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Lấy dữ liệu thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* createUser(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/user`,
      method: 'POST',
      data: action.actions,
    });
    if (data) {
      yield put(createUserSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: GET_USER,
      });
    } else {
      yield put(createUserFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(createUserFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* deleteUser(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/user/${action.actions}`,
      method: 'DELETE',
    });
    if (data) {
      yield put(deleteUserSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: GET_USER,
      });
    } else {
      yield put(deleteUserFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(deleteUserFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* editUser(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/user/${action.actions._id}`,
      method: 'PUT',
      data: action.actions,
    });
    if (data) {
      yield put(editUserSuccess());
      yield put(
        changeSnackbar({
          status: true,
          message: `Thao tác thành công`,
          variant: 'success',
        }),
      );
      yield put({
        type: GET_USER,
      });
    } else {
      yield put(editUserFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thao tác thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(editUserFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thao tác thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* getQuestion(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/play/user/${action.actions}`,
      method: 'GET',
    });
    if (data) {
      yield put(getQuestionSuccess(data.data));
    } else {
      yield put(getQuestionFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Lấy dữ liệu thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(getQuestionFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Lấy dữ liệu thất bại',
        variant: 'error',
      }),
    );
  }
}

export function* reset(action) {
  try {
    const data = yield call(sender, {
      url: `${BASE_URL}/user/reset/${action.data}`,
      method: 'POST',
    });
    if (data) {
      yield put(resetSuccess(data.data));
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thay đổi mật khẩu thành công',
          variant: 'success',
        }),
      );
    } else {
      yield put(resetFail());
      yield put(
        changeSnackbar({
          status: true,
          message: 'Thay đổi mật khẩu thất bại',
          variant: 'error',
        }),
      );
    }
  } catch (failed) {
    yield put(resetFail());
    yield put(
      changeSnackbar({
        status: true,
        message: 'Thay đổi mật khẩu thất bại',
        variant: 'error',
      }),
    );
  }
}
export default function* userViewSaga() {
  yield takeLatest(types.GET_USER, getUser);
  yield takeLatest(types.CREATE_USER, createUser);
  yield takeLatest(types.DELETE_USER, deleteUser);
  yield takeLatest(types.EDIT_USER, editUser);
  yield takeLatest(types.GET_QUESTION, getQuestion);
  yield takeLatest(types.RESET, reset);
}
