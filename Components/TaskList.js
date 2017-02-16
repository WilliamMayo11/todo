import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

import TaskItem from './TaskItem';

export default class TaskList extends Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  componentWillMount() {
    console.log(this.props)
  }

  renderTasks() {
    return this.props.tasks.map((task, i) => {
      return (
          <TaskItem
            id={task.id}
            key={i}
            title={task.title}
            description={task.description}
            deleteTask={this.props.deleteTask}
          />
      );
    });
  }

  render() {
    return(
      <ScrollView contentContainerStyle={styles.container1}>
        {this.renderTasks()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: '#3b5998',
    marginBottom: 20,
    height: 30,
    width: 30,
  }
});
