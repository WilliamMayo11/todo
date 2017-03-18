import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Main from './Components/Main';
import _environment from './server/lib/environment.js'

export default class todo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: 'Main',
          passProps: {
            user: 'Bill',
            apiUrl: _environment.development.API_URL
          }
        }}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todo', () => todo);
