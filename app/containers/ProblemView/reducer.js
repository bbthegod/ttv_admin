/*
 *
 * ProblemView reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const problemViewReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      //----------------------------------------------------
      case types.GET_PROBLEM:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case types.GET_PROBLEM_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          problems: action.data,
        };
      case types.GET_PROBLEM_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.CREATE_PROBLEM:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.CREATE_PROBLEM_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.CREATE_PROBLEM_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.EDIT_PROBLEM:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.EDIT_PROBLEM_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.EDIT_PROBLEM_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.DELETE_PROBLEM:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.DELETE_PROBLEM_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.DELETE_PROBLEM_FAIL:
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

export default problemViewReducer;
