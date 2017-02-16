import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import TaskList from './TaskList';

export default class Today extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: []
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

  componentDidMount() {
    this.getTasks();
  }

  render() {
    return(
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.welcome}>{this.props.user}'s Tasks for Today:</Text>
        </View>
        <ScrollView>
          <TaskList
            tasks={this.state.tasks}
          />
        </ScrollView>
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
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: -10,
  },
});
