import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

export default class TaskItem extends Component {

  render() {
    return(
      <View style={styles.container1}>
        <Text style={styles.text1}>Task: <Text style={styles.text2}>{this.props.title}</Text></Text>
        <Text style={styles.text1}>Description: <Text style={styles.text2}>{this.props.description}</Text></Text>
        <View style={styles.button1} >
          <Button title='Completed!' color='white' onPress={this.props.deleteTask}/>
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
