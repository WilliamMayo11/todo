import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
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
          key={i}
          title={task.title}
          description={task.description}
        />
      )
    })
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
