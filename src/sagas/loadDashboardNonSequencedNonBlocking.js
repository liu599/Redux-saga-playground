import { call, put, select, take, fork} from 'redux-saga/effects';
// import { loadSchedule} from '../redux/apiCalls';
import { loadForecast, loadSchedule, loadMeeting } from '../redux/apiCalls';

export const getUserFromState = (state) => state.user;

export function* loadDashboardNonSequencedNonBlocking() {
	try {
		// Wait for user
		yield take('FETCH_USER_SUCCESS');
		// Select Api result
		const user = yield select(getUserFromState);

		const schedule = yield call(loadSchedule, user);

		yield put ({type: 'FETCH_DASHBOARD_SUCCESS', payload: schedule});

		yield put ({type: 'FETCH_SCHEDULE_SUCCESS', payload: schedule});

	} catch(e) {
		yield put ({type: 'FETCH_FAILED', error: e.message});
		console.error(e);
	}
}