/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCEED,
  CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case LOGIN_SUCCEED:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
        };
      case LOGIN_FAILED:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      case CLOSE_SNACKBAR:
        return {
          ...state,
          status: false,
        };
      case CHANGE_SNACKBAR:
        return {
          ...state,
          ...action.data,
        };
      default:
        return state;
    }
  });

export default loginPageReducer;
