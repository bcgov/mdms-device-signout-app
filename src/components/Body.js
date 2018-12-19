import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { test } from '../actionCreators';
import Settings from './Settings';

export default class Body extends React.Component {
  onPressLearnMore = () => {
    test();
    Alert.alert('You tapped the button!');
  };

  render() {
    return (
      <View style={styles.container}>
        <Settings visibility={true} />
        <TouchableOpacity style={styles.b} onPress={this.onPressLearnMore} underlayColor="#fff">
          <Text style={styles.t}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  t: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  b: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#9932CC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  container: {
    flex: 2,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: '#042',
    // marginBottom: 800,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
