/*
 *
 * ProblemPage reducer
 *
 */
import produce from 'immer';
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

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const problemPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      //----------------------------------------------------
      case GET_PROBLEM:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case GET_PROBLEM_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          users: action.data,
        };
      case GET_PROBLEM_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case CREATE_PROBLEM:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case CREATE_PROBLEM_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case CREATE_PROBLEM_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case EDIT_PROBLEM:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case EDIT_PROBLEM_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case EDIT_PROBLEM_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case DELETE_PROBLEM:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case DELETE_PROBLEM_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case DELETE_PROBLEM_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      default:
        return state;
    }
  });

export default problemPageReducer;
