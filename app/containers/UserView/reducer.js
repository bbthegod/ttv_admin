/*
 *
 * UserView reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const userViewReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      //----------------------------------------------------
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
      //----------------------------------------------------
      case types.CREATE_USER:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.CREATE_USER_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.CREATE_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.EDIT_USER:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.EDIT_USER_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.EDIT_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.DELETE_USER:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case types.DELETE_USER_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case types.DELETE_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.GET_QUESTION:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case types.GET_QUESTION_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          questions: action.data,
        };
      case types.GET_QUESTION_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case types.RESET:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case types.RESET_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
        };
      case types.RESET_FAIL:
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

export default userViewReducer;
