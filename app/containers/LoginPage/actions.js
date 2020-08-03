/*
 *
 * ReadyPage actions
 *
 */

import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCEED,
  CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
} from './constants';

export function login(code, password) {
  return {
    type: LOGIN,
    code,
    password,
  };
}
export function loginSucceed() {
  return {
    type: LOGIN_FAILED,
  };
}

export function loginFailed() {
  return {
    type: LOGIN_SUCCEED,
  };
}
export const closeSnackbar = () => ({ type: CLOSE_SNACKBAR });

export const changeSnackbar = data => ({ type: CHANGE_SNACKBAR, data });
