import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class TaskItem extends Component {

  render() {
    return(
      <View style={styles.container1}>
        <Text>Title: {this.props.title}</Text>
        <Text>Description: {this.props.description}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
