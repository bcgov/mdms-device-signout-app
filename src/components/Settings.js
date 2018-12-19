import React from 'react';
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: this.props.visibility };
  }

  setModalVisibility = visible => this.setState({ modalVisible: visible });

  render() {
    return (
      <View style={{ backgroundColor: 'yellow' }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          // onRequestClose={() => {
          //   Alert.alert('Modal has been closed.');
          // }}
        >
          <View style={styles.blarb}>
            <View style={styles.narb}>
              <Text>Settings</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisibility(!this.state.modalVisible);
                }}
              >
                <Text>X</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  narb: {
    width: '80%',
    height: '60%',
    backgroundColor: 'blue',
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
    elevation: 20,
    padding: 10,
    // marginTop: '20%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4,
  },
  blarb: {
    width: '100%',
    height: '100%',
    // borderColor: '#ccc',
    // borderWidth: 1,
    // borderStyle: 'solid',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // elevation: 20,
    // padding: 10,
    // marginTop: 100,
    // marginLeft: 20,
    // marginRight: 20,
    // borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
