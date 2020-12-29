import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TextBox from './textInput';
import PanelForm from './panelForm';
import Wedges from './wedges';
import styled from 'styled-components/native';



function Switch({ param }) {
  function renderSwitch(param) {
    switch(param) {
      default :
        return (
            <>
              <TextBox name="Height" />
              <TextBox name="Width" />
              <TextBox name="Total" />
            </>
        )
      case 'curve' :
        return (
            <>
              <TextBox name="Height" />
              <TextBox name="Width" />
              <TextBox name="Radius" />
              <TextBox name="Total" />
              <Wedges />
            </>
        )
      case '360' :
        return (
            <>
              <TextBox name="Height" />
              <TextBox name="Width" />
              <TextBox name="Diameter" />
              <TextBox name="Total" />
              <Wedges />
            </>
        )
    }
  };
  return (
    <Box>
      <Text>Wall Dimensions</Text>
      {renderSwitch(param)}
    </Box>
  );
}

const Box = styled.View`
  flex: 1;
  max-width: 100%;
  background-color: #fff;
  align-items: center;
`
export default Switch;

