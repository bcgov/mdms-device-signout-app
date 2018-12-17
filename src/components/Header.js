import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 88,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: '#036',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
