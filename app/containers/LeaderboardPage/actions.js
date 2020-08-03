/*
 *
 * LeaderboardPage actions
 *
 */

import * as types from './constants';

//----------------------------------------------------
export function getPlay(query) {
  return {
    type: types.GET_PLAY,
    query,
  };
}

export function getPlaySuccess(data) {
  return {
    type: types.GET_PLAY_SUCCESS,
    data,
  };
}

export function getPlayFail() {
  return {
    type: types.GET_PLAY_FAIL,
  };
}
