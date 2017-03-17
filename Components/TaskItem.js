import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  NavigatorIOS,
} from 'react-native';

import EditTask from './EditTask';

export default class TaskItem extends Component {


  showEdit = ()=> {
    console.log('showEdit');
      this.props.navigator.push({
        component: EditTask,
        title: 'Edit Task',
        passProps: {
          // user: 'Bill',
          // id: this.props.id,
          // updateTaskTitle: this.props.updateTaskTitle,
          // updateTaskDescription: this.props.updateTaskDescription,
          // editTask: this.props.editTask
        }
      });
    }

  render() {

  //   const descriptionExists = {this.props.description};

  //   function renderDescription() {
  //     if (descriptionExists) {
  //     return <Text style={styles.text1}>Description: <Text style={styles.text2}>{this.props.description}</Text></Text>;
  //   }
  // }

    return(
      <View style={styles.container1}>
        <Text style={styles.text1}>Task: <Text style={styles.text2}>{this.props.title}</Text></Text>
        <Text style={styles.text1}>Description: <Text style={styles.text2}>{this.props.description}</Text></Text>
        <View style={styles.button1} >
          <Button title='Completed!' color='white' onPress={() => this.props.deleteTask(this.props.id)}/>
          <Button title='Edit' color='white' onPress={this.showEdit} />
        </View>
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
