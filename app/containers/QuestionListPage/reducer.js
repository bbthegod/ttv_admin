/*
 *
 * questionListPage reducer
 *
 */
import produce from 'immer';
import {
  GET_QUESTION,
  GET_QUESTION_FAIL,
  GET_QUESTION_SUCCESS,
  CREATE_QUESTION,
  CREATE_QUESTION_FAIL,
  CREATE_QUESTION_SUCCESS,
  DELETE_QUESTION,
  DELETE_QUESTION_FAIL,
  DELETE_QUESTION_SUCCESS,
  EDIT_QUESTION,
  EDIT_QUESTION_FAIL,
  EDIT_QUESTION_SUCCESS,
  GET_ALL_QUESTION,
  GET_ALL_QUESTION_FAIL,
  GET_ALL_QUESTION_SUCCESS,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const questionListPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
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
      case CREATE_QUESTION:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case CREATE_QUESTION_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case CREATE_QUESTION_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case EDIT_QUESTION:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case EDIT_QUESTION_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case EDIT_QUESTION_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      case DELETE_QUESTION:
        return {
          ...state,
          success: false,
          failed: false,
          loading: true,
        };
      case DELETE_QUESTION_SUCCESS:
        return {
          ...state,
          success: true,
          failed: false,
          loading: false,
        };
      case DELETE_QUESTION_FAIL:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      //----------------------------------------------------
      //----------------------------------------------------
      case GET_ALL_QUESTION:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case GET_ALL_QUESTION_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          allQuestions: action.data,
        };
      case GET_ALL_QUESTION_FAIL:
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

export default questionListPageReducer;
