import { fork } from 'redux-saga/effects';
import {loadUser} from './loadUser';
import { takeLatest } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
import {loadDashBoardSequenced} from './sequenceLoading';


export default function* rootSaga() {
  yield [
    fork(loadUser),
    takeLatest('LOAD_DASH_BOARD', loadDashBoardSequenced)
  ]
}