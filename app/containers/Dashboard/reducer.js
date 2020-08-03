/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER,
  CLOSE_SNACKBAR,
  CHANGE_SNACKBAR,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const DashboardReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      //----------------------------------------------------
      case GET_USER:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case GET_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          users: action.data,
        };
      case GET_USER_FAIL:
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
    }
  });

export default DashboardReducer;
