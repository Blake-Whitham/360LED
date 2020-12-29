import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import Wedge from './wedge';
import Add from './add';



const Wedges = () => {
  const [items, setItems] = useState(['1.3','2.5'])

  const handleClick = (newWedge) => {
    if (items.includes(newWedge)) {
      Alert.alert('duplicates are not necessary')
    } else
    if (newWedge) {
      setItems(items => [...items, newWedge])
    }
  }
  return (
    <Container>
      <Add
        onClick={handleClick}
      />
      <Row>
        {items.map((item, i) => {
          return (
            <Wedge
              key={i}
              name={item}
            />
          )
        })}
      </Row>
    </Container>
  )
}
export default Wedges;

const Container = styled.View`
  flex: auto;
  flex-direction: column;
  max-width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
const Row = styled.View`
  flex-flow: row wrap
  align-items: center;
  justify-content: center;
`