/*
 *
 * QuestionPage actions
 *
 */

import {
  GET_QUESTION,
  GET_QUESTION_FAIL,
  GET_QUESTION_SUCCESS,
  CREATE_QUESTION,
  CREATE_QUESTION_FAIL,
  CREATE_QUESTION_SUCCESS,
  DELETE_QUESTION,
  DELETE_QUESTION_FAIL,
  DELETE_QUESTION_SUCCESS,
  EDIT_QUESTION,
  EDIT_QUESTION_FAIL,
  EDIT_QUESTION_SUCCESS,
} from './constants';

//----------------------------------------------------
export function getQuestion(query) {
  return {
    type: GET_QUESTION,
    query,
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
export function createQuestion(actions) {
  return {
    type: CREATE_QUESTION,
    actions,
  };
}

export function createQuestionSuccess() {
  return {
    type: CREATE_QUESTION_SUCCESS,
  };
}

export function createQuestionFail() {
  return {
    type: CREATE_QUESTION_FAIL,
  };
}
//----------------------------------------------------
export function editQuestion(actions) {
  return {
    type: EDIT_QUESTION,
    actions,
  };
}

export function editQuestionSuccess() {
  return {
    type: EDIT_QUESTION_SUCCESS,
  };
}

export function editQuestionFail() {
  return {
    type: EDIT_QUESTION_FAIL,
  };
}
//----------------------------------------------------
export function deleteQuestion(actions) {
  return {
    type: DELETE_QUESTION,
    actions,
  };
}

export function deleteQuestionSuccess() {
  return {
    type: DELETE_QUESTION_SUCCESS,
  };
}

export function deleteQuestionFail() {
  return {
    type: DELETE_QUESTION_FAIL,
  };
}
