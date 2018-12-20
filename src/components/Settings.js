import { AntDesign } from '@expo/vector-icons';
import { create, Store } from 'microstates';
import PropTypes from 'prop-types';
import React from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Settings extends React.Component {
  updateVisibility = modalVisible => this.setState({ modalVisible });

  state = {
    modalVisible: Store(create(Boolean, this.props.visibility), this.updateVisibility),
  };

  render() {
    const { modalVisible } = this.state;

    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible.state}
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
                onPress={() => modalVisible.toggle()}
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
  visibility: PropTypes.bool.isRequired,
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
