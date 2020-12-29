import React, { useState, Component } from 'react';
import styled from 'styled-components/native';
import { TextInput, StyleSheet, View } from 'react-native';

// const Container = styled.View`
//   flex: 1;
//   background-color: #fff;
//   align-items: center;
//   justify-content: center;
// `

// const Input = styled.TextInput`
//   height: 40px;
//   width: 120px;
//   margin: 10px;
//   border-color: 'rgb(119, 119, 119)';
//   border-width: 1px;
//   border-radius: 7px;
// `

const TextBox = ({ name }) => {
  const [value, setValue] = useState('')
  return (
    <View style={styles.Container}>
      <TextInput style={styles.Input}
        type="text"
        id={name}
        name={name}
        placeholder={"  " + name}
        onChangeText={text => setValue(text)}
        value={value}
        required
        />
    </View>
  )
}
export default TextBox;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    height: 40,
    width: 120,
    margin: 10,
    borderColor: 'rgb(119, 119, 119)',
    borderWidth: 1,
    borderRadius: 7,
  }
})
