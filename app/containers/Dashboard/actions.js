/*
 *
 * Dashboard actions
 *
 */

import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
} from './constants';
//----------------------------------------------------
export function getUser() {
  return {
    type: GET_USER,
  };
}

export function getUserSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
    data,
  };
}

export function getUserFail() {
  return {
    type: GET_USER_FAIL,
  };
}

export const closeSnackbar = () => ({ type: CLOSE_SNACKBAR });

export const changeSnackbar = data => ({ type: CHANGE_SNACKBAR, data });
