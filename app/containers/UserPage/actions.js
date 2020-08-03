/*
 *
 * UserPage actions
 *
 */

import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  CREATE_USER,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
  GET_QUESTION,
  GET_QUESTION_FAIL,
  GET_QUESTION_SUCCESS,
  GET_TRANSACTION,
  GET_TRANSACTION_FAIL,
  GET_TRANSACTION_SUCCESS,
} from './constants';

//----------------------------------------------------
export function getUser(query) {
  return {
    type: GET_USER,
    query,
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
//----------------------------------------------------
export function createUser(actions) {
  return {
    type: CREATE_USER,
    actions,
  };
}

export function createUserSuccess() {
  return {
    type: CREATE_USER_SUCCESS,
  };
}

export function createUserFail() {
  return {
    type: CREATE_USER_FAIL,
  };
}
//----------------------------------------------------
export function editUser(actions) {
  return {
    type: EDIT_USER,
    actions,
  };
}

export function editUserSuccess() {
  return {
    type: EDIT_USER_SUCCESS,
  };
}

export function editUserFail() {
  return {
    type: EDIT_USER_FAIL,
  };
}
//----------------------------------------------------
export function deleteUser(actions) {
  return {
    type: DELETE_USER,
    actions,
  };
}

export function deleteUserSuccess() {
  return {
    type: DELETE_USER_SUCCESS,
  };
}

export function deleteUserFail() {
  return {
    type: DELETE_USER_FAIL,
  };
}
//----------------------------------------------------
export function getQuestion(actions) {
  return {
    type: GET_QUESTION,
    actions,
  };
}

export function getQuestionSuccess(data) {
  return {
    type: GET_QUESTION_SUCCESS,
    data,
  };
}

export function getQuestionFail() {
  return {
    type: GET_QUESTION_FAIL,
  };
}

//----------------------------------------------------
export function getTransaction(actions) {
  return {
    type: GET_TRANSACTION,
    actions,
  };
}

export function getTransactionSuccess(data) {
  return {
    type: GET_TRANSACTION_SUCCESS,
    data,
  };
}

export function getTransactionFail() {
  return {
    type: GET_TRANSACTION_FAIL,
  };
}
