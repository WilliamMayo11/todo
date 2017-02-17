import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  NavigatorIOS,
  PropTypes
} from 'react-native';

import Today from './Today';

export default class Main extends Component {

  componentWillMount() {
    console.log(this.props.user);
  }

  showToday = ()=> {
    this.props.navigator.push({
      component: Today,
      title: 'Today',
      passProps: {
        user: 'Bill'
      }
    });
  }

  showLater = ()=> {
    console.log('showLater() from Main.js');
  }

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>2Do App</Text>
      <View style={styles.button}>
        <Button title="Today" color="white" onPress={this.showToday}/>
      </View>
      <View style={styles.button}>
        <Button title="Later" color="white" onPress={this.showLater}/>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: 'red',
    marginBottom: 120,
    fontSize: 60,
  },
  button: {
    backgroundColor: '#3b5998',
    marginBottom: 20,
    height: 30,
    width: 90,
  }
});
