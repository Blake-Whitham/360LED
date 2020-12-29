import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextBox from './textInput';


export default function PanelForm() {
  return (
    <View style={styles.container}>
      <Text>Panel Dimensions</Text>
      <TextBox name="height" />
      <TextBox name="width" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    maxHeight: '20%' ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});