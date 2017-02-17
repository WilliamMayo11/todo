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

export default class Today extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      newTaskInput: ''
    }
  }

  getTasks() {
    fetch(`http://localhost:3000/db/tasks`)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      this.setState({
        tasks: data
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
    console.log(this.state.newTaskInput)
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
        <View>
          <TextInput
            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
            placeholder='New Task'
            onChangeText={(text)=> this.setState({text})}
          />
          <Button
            title='Add'
            onPress={this.addTask}
          />
        </View>
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
