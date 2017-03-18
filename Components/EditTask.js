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
        <Text style={styles.header}>Edit This Task</Text>
        <Text style={styles.titleAndDescription}>Task: {this.props.title}</Text>
        <Text style={styles.titleAndDescription}>Description: {this.props.description}</Text>
        <View style={styles.container1}>
          <TextInput
            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
            placeholder='New Title'
            onChangeText={this.props.updateTaskTitle}
          />
          <TextInput
            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
            placeholder='New Description'
            onChangeText={this.props.updateTaskDescription}
          />
          <Button
            title='Edit'
            onPress={this.props.editTask(this.props.id)}
          />
        </View>
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
  header: {
    fontSize: 20,
    marginBottom: 50,
  },
  titleAndDescription: {
  fontSize: 15,
  marginBottom: 10,
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
