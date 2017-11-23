import { fork } from 'redux-saga/effects';
import {loadUser} from './loadUser';
import { takeLatest } from 'redux-saga/effects';
// C1
import {loadDashBoardSequenced} from './sequenceLoading';
// C2
import {loadDashBoardNonBlocking} from './nonBlockingLoading';
// C3
import {isolatedMeeting} from './meetingSaga';
import {isolatedForecast} from './forecastSaga';
import {loadDashboardNonSequencedNonBlocking} from './loadDashboardNonSequencedNonBlocking';


export default function* rootSaga() {
  yield [
    fork(loadUser),
    // NOTE: sequenced loading
    // NOTE: the last two request is only depended on schedule, so this can be done synchronously.
    // takeLatest('LOAD_DASH_BOARD', loadDashBoardSequenced),
    // NOTE: non-blocking (synchronously loading)
    // NOTE: however, the last two UIs are waiting until the end of the last response
    // NOTE: what if we need to update the UI as soon as operation is finished?
    // takeLatest('LOAD_DASH_BOARD', loadDashBoardNonBlocking),
	  // NOTE: non-blocking non-sequenced loading
	  takeLatest('LOAD_DASH_BOARD', loadDashboardNonSequencedNonBlocking),
	  fork(isolatedMeeting),
	  fork(isolatedForecast)
  ]
}