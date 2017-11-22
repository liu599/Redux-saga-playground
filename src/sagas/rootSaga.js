import { fork } from 'redux-saga/effects';
import {loadUser} from './loadUser';
import { takeLatest } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import {loadDashBoardSequenced} from './sequenceLoading';
import {loadDashBoardNonBlocking} from './nonBlockingLoading';


export default function* rootSaga() {
  yield [
    fork(loadUser),
    // NOTE: sequenced loading
    // takeLatest('LOAD_DASH_BOARD', loadDashBoardSequenced),
    // NOTE: non-blocking (synchronously loading)
    takeLatest('LOAD_DASH_BOARD', loadDashBoardNonBlocking),
  ]
}