import { call, put, take} from 'redux-saga/effects';
import { loadMeeting } from '../redux/apiCalls';

export function* isolatedMeeting() {
	try {
		const schedule = yield take('FETCH_SCHEDULE_SUCCESS');

		const meeting = yield call(loadMeeting, schedule.date);

		yield put({type: 'FETCH_DASHBOARD_SUCCESS', payload: meeting})

	} catch(err) {

		yield put({type: 'FETCH_FAILED', error: err.message});

	}
}
