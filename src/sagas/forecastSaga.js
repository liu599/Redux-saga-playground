import { call, put, take} from 'redux-saga/effects';
import { loadForecast } from '../redux/apiCalls';

export function* isolatedForecast() {
	try {
		const schedule = yield take('FETCH_SCHEDULE_SUCCESS');

		const forecast = yield call(loadForecast, schedule.date);

		yield put({type: 'FETCH_DASHBOARD_SUCCESS', payload: forecast})

	} catch(err) {

		yield put({type: 'FETCH_FAILED', error: err.message});

	}
}
