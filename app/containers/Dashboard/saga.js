import { call, put, takeLatest } from 'redux-saga/effects';
// import sender from '../../helpers/sender';
// import { getUserFail, getUserSuccess } from './actions';
import * as types from './constants';
// import { BASE_URL } from '../../utils/url';

// export function* getUser(action) {
//   try {
//     const data = yield call(sender, {
//       url: `${BASE_URL}/user/info/me`,
//       method: 'GET',
//     });
//     if (data) {
//       yield put(getUserSuccess(data.data));
//     } else {
//       yield put(getUserFail());
//     }
//   } catch (failed) {
//     yield put(getUserFail());
//   }
// }

export default function* DashboardSaga() {
  // yield takeLatest(types.GET_USER, getUser);
}
