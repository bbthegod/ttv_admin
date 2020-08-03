/*
 *
 * CheckinPage reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const interviewPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      //----------------------------------------------------
      case types.GET_CHECKIN:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case types.GET_CHECKIN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          checkins: action.data,
        };
      case types.GET_CHECKIN_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.CREATE_CHECKIN:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.CREATE_CHECKIN_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.CREATE_CHECKIN_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.EDIT_CHECKIN:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.EDIT_CHECKIN_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.EDIT_CHECKIN_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.DELETE_CHECKIN:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.DELETE_CHECKIN_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.DELETE_CHECKIN_FAIL:
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
