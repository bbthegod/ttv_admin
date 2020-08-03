/*
 *
 * CheckinPage actions
 *
 */

import * as types from './constants';

//----------------------------------------------------
export function getCheckin(query) {
  return {
    type: types.GET_CHECKIN,
    query,
  };
}

export function getCheckinSuccess(data) {
  return {
    type: types.GET_CHECKIN_SUCCESS,
    data,
  };
}

export function getCheckinFail() {
  return {
    type: types.GET_CHECKIN_FAIL,
  };
}
//----------------------------------------------------
export function createCheckin(actions) {
  return {
    type: types.CREATE_CHECKIN,
    actions,
  };
}

export function createCheckinSuccess() {
  return {
    type: types.CREATE_CHECKIN_SUCCESS,
  };
}

export function createCheckinFail() {
  return {
    type: types.CREATE_CHECKIN_FAIL,
  };
}
//----------------------------------------------------
export function editCheckin(actions) {
  return {
    type: types.EDIT_CHECKIN,
    actions,
  };
}

export function editCheckinSuccess() {
  return {
    type: types.EDIT_CHECKIN_SUCCESS,
  };
}

export function editCheckinFail() {
  return {
    type: types.EDIT_CHECKIN_FAIL,
  };
}
//----------------------------------------------------
export function deleteCheckin(actions) {
  return {
    type: types.DELETE_CHECKIN,
    actions,
  };
}

export function deleteCheckinSuccess() {
  return {
    type: types.DELETE_CHECKIN_SUCCESS,
  };
}

export function deleteCheckinFail() {
  return {
    type: types.DELETE_CHECKIN_FAIL,
  };
}
