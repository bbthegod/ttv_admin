/*
 *
 * InterviewPage reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const interviewPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case types.GET_USER:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case types.GET_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          users: action.data,
        };
      case types.GET_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };

      case types.INTERVIEW:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case types.INTERVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
        };
      case types.INTERVIEW_FAIL:
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

export default interviewPageReducer;
