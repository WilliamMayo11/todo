import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';

export default class TaskInput extends Component {

  render() {
    return(
      <View>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
          placeholder='New Task'
          onChangeText={this.props.updateTaskTitle}
        />
        <Button
          title='Add'
          onPress={this.props.addTask}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  text1: {
    fontSize: 20,
    margin: 1,
    color: '#3b5998',
  },
  text2: {
    fontSize: 20,
    margin: 1,
    color: 'black',
  },
  button1: {
    backgroundColor: '#3b5998',
  },
});
