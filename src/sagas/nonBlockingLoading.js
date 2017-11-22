import { call, put, select, take, all} from 'redux-saga/effects';
// import { loadSchedule} from '../redux/apiCalls';
import { loadForecast, loadSchedule, loadMeeting } from '../redux/apiCalls';

export const getUserFromState = (state) => state.user;

export function* loadDashBoardNonBlocking() {
  try {
    // Wait for user
    yield take('FETCH_USER_SUCCESS');
    // Select Api result
    const user = yield select(getUserFromState);

    const schedule = yield call(loadSchedule, user);

    // yield take('FETCH_DASH_BOARD_SUCCESS');

    // const forecast = yield call(loadForecast, schedule.date);
    //
    // const meeting = yield call(loadMeeting, schedule.date);

    const {forecast, meeting} = yield all({
      forecast: call(loadForecast, schedule.date),
      meeting: call(loadMeeting, schedule.date)
    });

    yield put ({type: 'FETCH_DASHBOARD_SUCCESS', payload: Object.assign({}, schedule, forecast, meeting)})

  } catch(e) {
    yield put ({type: 'FETCH_FAILED', error: e.message});
    console.error(e);
  }
}