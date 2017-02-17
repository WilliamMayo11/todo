import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

import TaskList from './TaskList';
import TaskInput from './TaskInput';

export default class Today extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      taskTitle: '',
      taskDescription: ''
    }
  }

  // API Fetches

  getTasks() {
    fetch(`http://localhost:3000/db/tasks`)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      this.setState({
        tasks: data.reverse()
      });
      console.log(this.state.tasks[0].title)
    })
    .catch(err => console.log(err));
  }

  deleteTask(id) {
    console.log('deleteTask() pressed');
    fetch(`http://localhost:3000/db/tasks/${id}`, {
      method: 'delete'
    })
    .then(() => {
      let tasks = this.state.tasks.filter((task) => {
        return task.id !== id;
      });
      this.setState({ tasks });
    })
    .catch(err => console.log(err));
  }

  addTask() {
    fetch(`http://localhost:3000/db/tasks`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        title: this.state.taskTitle,
        description: this.state.taskDescription
      })
    })
    .then(this.setState({
      taskTitle: '',
      taskDescription: ''
    }))
    .then(this.getTasks())
    .catch(err => console.log(err));
  }

  // Handle Text Inputs

  updateTaskTitle(text) {
    this.setState ({
      taskTitle: text
    });
  }

  updateTaskDescription(text) {
    this.setState ({
      taskDescription: text
    });
  }

  componentDidMount() {
    this.getTasks();
  }

  render() {
    return(
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.welcome}>{this.props.user}'s Tasks for Today:</Text>
        </View>
        <TaskInput
          updateTaskTitle={this.updateTaskTitle.bind(this)}
          updateTaskDescription={this.updateTaskDescription.bind(this)}
          addTask={this.addTask.bind(this)}
        />
        <ScrollView>
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask.bind(this)}
          />
        </ScrollView>
        <View style={styles.container3}>
          <Text></Text>
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
