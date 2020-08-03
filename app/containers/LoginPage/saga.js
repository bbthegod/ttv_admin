import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { loginSucceed, loginFailed } from './actions';
import * as types from './constants';
import { LOGIN } from '../../utils/url';
export function* login(action) {
  try {
    const data = yield call(axios, {
      url: LOGIN,
      method: 'POST',
      headers: { Authorization: `Bearer hithaui10years` },
      data: {
        studentId: action.code,
        password: action.password,
      },
    });
    if (data.status == 200) {
      if (data.data.user.role != 'user') {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('name', data.data.user.name);
        localStorage.setItem('role', data.data.user.role);
        localStorage.setItem('studentId', data.data.user.studentId);
        yield put(loginSucceed());
      } else {
        alert('Người dùng không được phép truy cập');
        yield put(loginFailed());
      }
    } else {
      alert('Đăng nhập thất bại');
      yield put(loginFailed());
    }
  } catch (error) {
    alert('Đăng nhập thất bại');
    yield put(loginFailed());
  }
}
export default function* loginPageSaga() {
  yield takeLatest(types.LOGIN, login);
}
