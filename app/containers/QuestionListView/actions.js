/*
 *
 * QuestionListView actions
 *
 */

import * as types from './constants';

//----------------------------------------------------
export function getQuestion(query) {
  return {
    type: types.GET_QUESTION,
    query,
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
export function getAllQuestion() {
  return {
    type: types.GET_ALL_QUESTION,
  };
}

export function getAllQuestionSuccess(data) {
  return {
    type: types.GET_ALL_QUESTION_SUCCESS,
    data,
  };
}

export function getAllQuestionFail() {
  return {
    type: types.GET_ALL_QUESTION_FAIL,
  };
}
