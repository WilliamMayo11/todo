import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  NavigatorIOS,
  TextInput,
} from 'react-native';

export default class EditTask extends Component {

  render() {

    return(
      <View style={styles.container}>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
          placeholder='New Task'
          onChangeText={this.props.updateTaskTitle}
        />
        <TextInput
          style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
          placeholder='Description'
          onChangeText={this.props.updateTaskDescription}
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 90,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: -10,
    position: 'relative',
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 1,
    position: 'relative',
  },
});
