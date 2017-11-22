import React, { Component } from 'react';
import { connect } from 'react-redux';
import allActions from '../redux/actions'

class Schedule extends Component {

  componentDidMount() {
    // this.props.loadDashBoard();
  }


  render() {
    return (
      <div>
        <p>{this.props.dashboard.date}</p>
        <p>{this.props.dashboard.userId}</p>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, allActions)(Schedule)


