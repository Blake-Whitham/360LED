import React, { Component } from 'react';
import styled from 'styled-components/native';
import { TextInput, Button } from 'react-native';


const CustButton = styled.Button`
  height: 40px;
  width: 120px;
`

const LEDButton = ({ name, onClick }) => {

  return (
  <CustButton
    title={name}
    onPress={() => onClick(name)}
  />
  )
}
export default LEDButton;