/*
 *
 * ProblemView actions
 *
 */
import * as types from './constants';

//----------------------------------------------------
export function getProblem(query) {
  return {
    type: types.GET_PROBLEM,
    query,
  };
}

export function getProblemSuccess(data) {
  return {
    type: types.GET_PROBLEM_SUCCESS,
    data,
  };
}

export function getProblemFail() {
  return {
    type: types.GET_PROBLEM_FAIL,
  };
}
//----------------------------------------------------
export function createProblem(actions) {
  return {
    type: types.CREATE_PROBLEM,
    actions,
  };
}

export function createProblemSuccess() {
  return {
    type: types.CREATE_PROBLEM_SUCCESS,
  };
}

export function createProblemFail() {
  return {
    type: types.CREATE_PROBLEM_FAIL,
  };
}
//----------------------------------------------------
export function editProblem(actions) {
  return {
    type: types.EDIT_PROBLEM,
    actions,
  };
}

export function editProblemSuccess() {
  return {
    type: types.EDIT_PROBLEM_SUCCESS,
  };
}

export function editProblemFail() {
  return {
    type: types.EDIT_PROBLEM_FAIL,
  };
}
//----------------------------------------------------
export function deleteProblem(actions) {
  return {
    type: types.DELETE_PROBLEM,
    actions,
  };
}

export function deleteProblemSuccess() {
  return {
    type: types.DELETE_PROBLEM_SUCCESS,
  };
}

export function deleteProblemFail() {
  return {
    type: types.DELETE_PROBLEM_FAIL,
  };
}
