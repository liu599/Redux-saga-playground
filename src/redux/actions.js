export default {
  add: function() {
    return {
      type: 'INCREMENT'
    }
  },
  loadDashBoard: function() {
    return {
      type: 'LOAD_DASH_BOARD'
    }
  }
}