import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { test } from '../actionCreators';

export default class Body extends React.Component {
  onPressLearnMore = () => {
    test();
    Alert.alert('You tapped the button!');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#ffff"
          backgroundColor="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
