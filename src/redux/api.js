export default {
  getUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          email: 'xxx@gmail.com',
          repository: 'http://github.com/xxx'
        })
      }, 4000)
    });
  },

  getSchedule(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('myUser:', user);
        resolve({
          userId: user.email,
          date: new Date().getTime()
        })
      }, 3000)
    })
  },

  getForecast(date) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          date,
          forecast: 'rain'
        })
      }, 3000)
    })
  },

  getMeeting(date) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          member: 'Toyama Kasumi',
          time: 'T_T'
        })
      }, 8000)
    })
  }

}