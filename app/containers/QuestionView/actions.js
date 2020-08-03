/*
 *
 * QuestionView actions
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
