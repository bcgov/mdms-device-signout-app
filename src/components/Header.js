import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { foo } from '../actionCreators';
import Settings from './Settings';

const defaultColor = '#036';

export class Header extends React.Component {
  _blarb() {
    console.log(this.props);
    // this.props.blarb();
  }

  render() {
    return (
      <View style={styles.container}>
        {console.log('Header', this.props)}
        <Settings />
        <StatusBar backgroundColor="#036" barStyle="light-content" />
        <View style={styles.spacer} />
        <View style={styles.spacer}>
          <Text style={styles.text}>It's Me</Text>
        </View>
        <TouchableHighlight
          onPress={() => {
            this.props.foo();
          }}
          style={styles.spacer}
          underlayColor={defaultColor}
        >
          <Ionicons
            name="ios-settings"
            size={26}
            color="white"
            style={{ marginLeft: 'auto', marginRight: 15 }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    height: 88,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: `${defaultColor}`,
    paddingTop: 50,
  },
  spacer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ foo }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
