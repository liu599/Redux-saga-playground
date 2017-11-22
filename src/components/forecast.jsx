import React, { Component } from 'react';
import { connect } from 'react-redux';
import allActions from '../redux/actions'

class Forecast extends Component {

  componentDidMount() {
    // this.props.loadDashBoard();
  }

  render() {
    return (
      <div>
        <p>{this.props.dashboard.forecast}</p>
        <p>{this.props.dashboard.member}</p>
        <p>{this.props.dashboard.time}</p>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, allActions)(Forecast)