/*
 *
 * LeaderboardPage reducer
 *
 */
import produce from 'immer';
import * as types from './constants';
export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const leaderboardPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      //----------------------------------------------------
      case types.GET_PLAY:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      case types.GET_PLAY_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
          success: true,
          plays: action.data,
        };
      case types.GET_PLAY_FAIL:
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

export default leaderboardPageReducer;
