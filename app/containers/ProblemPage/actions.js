/*
 *
 * ProblemPage actions
 *
 */

import {
  GET_PROBLEM,
  GET_PROBLEM_FAIL,
  GET_PROBLEM_SUCCESS,
  CREATE_PROBLEM,
  CREATE_PROBLEM_FAIL,
  CREATE_PROBLEM_SUCCESS,
  DELETE_PROBLEM,
  DELETE_PROBLEM_FAIL,
  DELETE_PROBLEM_SUCCESS,
  EDIT_PROBLEM,
  EDIT_PROBLEM_FAIL,
  EDIT_PROBLEM_SUCCESS,
} from './constants';

//----------------------------------------------------
export function getProblem(query) {
  return {
    type: GET_PROBLEM,
    query,
  };
}

export function getProblemSuccess(data) {
  return {
    type: GET_PROBLEM_SUCCESS,
    data,
  };
}

export function getProblemFail() {
  return {
    type: GET_PROBLEM_FAIL,
  };
}
//----------------------------------------------------
export function createProblem(actions) {
  return {
    type: CREATE_PROBLEM,
    actions,
  };
}

export function createProblemSuccess() {
  return {
    type: CREATE_PROBLEM_SUCCESS,
  };
}

export function createProblemFail() {
  return {
    type: CREATE_PROBLEM_FAIL,
  };
}
//----------------------------------------------------
export function editProblem(actions) {
  return {
    type: EDIT_PROBLEM,
    actions,
  };
}

export function editProblemSuccess() {
  return {
    type: EDIT_PROBLEM_SUCCESS,
  };
}

export function editProblemFail() {
  return {
    type: EDIT_PROBLEM_FAIL,
  };
}
//----------------------------------------------------
export function deleteProblem(actions) {
  return {
    type: DELETE_PROBLEM,
    actions,
  };
}

export function deleteProblemSuccess() {
  return {
    type: DELETE_PROBLEM_SUCCESS,
  };
}

export function deleteProblemFail() {
  return {
    type: DELETE_PROBLEM_FAIL,
  };
}
