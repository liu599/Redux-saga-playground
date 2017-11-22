import React, { Component } from 'react';
import { connect } from 'react-redux';
import allActions from '../redux/actions'

class User extends Component {

    componentDidMount() {
      this.props.loadDashBoard();
    }

    render() {
        return (
          <div>
            <p>{this.props.user.email}</p>
            <p>{this.props.user.repository}</p>
          </div>
        )
    }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, allActions)(User)


