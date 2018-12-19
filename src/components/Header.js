import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#036" barStyle="light-content" />
        <Text style={styles.t}>It's Me</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  t: {
    // flex: 3,
    color: '#FFFF',
    marginBottom: -40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    // flex: 1,
    height: 88,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: '#036',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
