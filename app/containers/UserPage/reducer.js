/*
 *
 * UserPage reducer
 *
 */
import produce from 'immer';
import {
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
  CREATE_USER,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_FAIL,
  EDIT_USER_SUCCESS,
  GET_QUESTION,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FAIL,
  GET_TRANSACTION,
  GET_TRANSACTION_FAIL,
  GET_TRANSACTION_SUCCESS,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const userPageReducer = (state = initialState, action) =>
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
      //----------------------------------------------------
      case CREATE_USER:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case CREATE_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case EDIT_USER:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case EDIT_USER_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case EDIT_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case DELETE_USER:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case DELETE_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case GET_QUESTION:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case GET_QUESTION_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          questions: action.data,
        };
      case GET_QUESTION_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case GET_TRANSACTION:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case GET_TRANSACTION_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          transactions: action.data,
        };
      case GET_TRANSACTION_FAIL:
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

export default userPageReducer;
