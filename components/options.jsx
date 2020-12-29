import React, { Component } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import LEDButton from './button'



const Options = ({ onClick }) => {
  return (
    <Container>
      <LEDButton
        name="flat"
        onClick={onClick}
      />
      <LEDButton
        name="curve"
        onClick={onClick}
      />
      <LEDButton
        name="360"
        onClick={onClick}
      />
    </Container>
  )
}

export default Options

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 10%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`