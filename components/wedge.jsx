import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import TextBox from './textInput';
import PanelForm from './panelForm'

const Wedge = ({ name }) => {

  return (
    <View style={styles.Container}>
      <Button
        type="outline"
        title={name}
      />
    </View>
  )
}
export default Wedge;

const styles = StyleSheet.create({
  Container: {
    marginLeft: 3,
  },
  Input: {
    height: 40,
    width: 120,
    borderColor: 'rgb(119, 119, 119)',
    borderWidth: 1,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  }
})
