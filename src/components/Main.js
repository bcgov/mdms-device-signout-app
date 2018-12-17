import React from 'react';
import { StyleSheet, View } from 'react-native';
import Body from './Body';
import Header from './Header';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ebcf',
    alignItems: 'stretch',
    // marginTop: 0,
    // height: 500,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
