import dashboardApi from '../redux/api'

export const loadUser = () => {
  console.log('loading user');
  return dashboardApi.getUser().then(res => res);
};

export const loadSchedule = (user) => {
  console.log('acquire schedule');
  return dashboardApi.getSchedule(user).then(res => {
    console.log('res', res);
    return res
  });
};

export const loadForecast = (date) => {
  console.log('loading Forecast');
  return dashboardApi.getForecast(date).then(res => res);
};

export const loadMeeting = (date) => {
  console.log('loading Meeting');
  return dashboardApi.getMeeting(date).then(res => res);
};