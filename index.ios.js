import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './App';


export default class App1 extends Component {
  render() {
    return (
      <App/>
    );
  }
}


AppRegistry.registerComponent('App1', () => App1);
