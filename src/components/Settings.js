import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bar } from '../actionCreators';

export class Settings extends React.Component {
  render() {
    return (
      <View>
        {console.log('Settings', this.props)}
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.settings.isVisible}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          // }}
        >
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.spacer} />
              <View style={styles.spacer}>
                <Text style={styles.text}>Settings</Text>
              </View>
              <TouchableHighlight
                onPress={() => this.props.bar()}
                style={styles.spacer}
                underlayColor="white"
              >
                <AntDesign
                  name="closecircleo"
                  size={24}
                  color="black"
                  style={{ marginLeft: 'auto', marginRight: 15 }}
                />
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  content: {
    flex: 0,
    flexDirection: 'row',
    width: '80%',
    height: '60%',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  spacer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginTop: 10,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ bar }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
