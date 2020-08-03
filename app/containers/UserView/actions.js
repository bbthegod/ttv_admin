/*
 *
 * UserView actions
 *
 */
import * as types from './constants';

//----------------------------------------------------
export function getUser(query) {
  return {
    type: types.GET_USER,
    query,
  };
}

export function getUserSuccess(data) {
  return {
    type: types.GET_USER_SUCCESS,
    data,
  };
}

export function getUserFail() {
  return {
    type: types.GET_USER_FAIL,
  };
}
//----------------------------------------------------
export function createUser(actions) {
  return {
    type: types.CREATE_USER,
    actions,
  };
}

export function createUserSuccess() {
  return {
    type: types.CREATE_USER_SUCCESS,
  };
}

export function createUserFail() {
  return {
    type: types.CREATE_USER_FAIL,
  };
}
//----------------------------------------------------
export function editUser(actions) {
  return {
    type: types.EDIT_USER,
    actions,
  };
}

export function editUserSuccess() {
  return {
    type: types.EDIT_USER_SUCCESS,
  };
}

export function editUserFail() {
  return {
    type: types.EDIT_USER_FAIL,
  };
}
//----------------------------------------------------
export function deleteUser(actions) {
  return {
    type: types.DELETE_USER,
    actions,
  };
}

export function deleteUserSuccess() {
  return {
    type: types.DELETE_USER_SUCCESS,
  };
}

export function deleteUserFail() {
  return {
    type: types.DELETE_USER_FAIL,
  };
}
//----------------------------------------------------
export function getQuestion(actions) {
  return {
    type: types.GET_QUESTION,
    actions,
  };
}

export function getQuestionSuccess(data) {
  return {
    type: types.GET_QUESTION_SUCCESS,
    data,
  };
}

export function getQuestionFail() {
  return {
    type: types.GET_QUESTION_FAIL,
  };
}
//----------------------------------------------------
export function reset(data) {
  return {
    type: types.RESET,
    data,
  };
}

export function resetSuccess() {
  return {
    type: types.RESET_SUCCESS,
  };
}

export function resetFail() {
  return {
    type: types.RESET_FAIL,
  };
}
