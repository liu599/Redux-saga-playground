import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import allActions from './redux/actions';
import User from './components/user'
import Schedule from './components/schedule'
import Forecast from './components/forecast'

class App extends Component {

  clickHandler = () => {
    this.props.add();
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{border: '3px solid green', margin: '10px auto', width: '600px'}}>
          <User></User>
        </div>
        <div style={{border: '5px solid deeppink', margin: '30px auto', width: '600px'}}>
          <Schedule></Schedule>
        </div>
        <div style={{border: '5px solid deeppink', margin: '30px auto', width: '600px'}}>
          <Forecast></Forecast>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, allActions)(App);
