import { Button } from 'react-native-elements';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TextBox from './textInput'

const Add = ({ onClick }) => {
  const [value, setValue] = useState('')
  // const [flag, setFlag] = useState(true)

  const handleClick = () => {
    onClick(value);
    // setFlag(true);
    setValue('');
  }

  return (
    <View style={styles.Container}>
      {/* {flag ?
        <Button
          title="+"
          onPress={()=>setFlag(false)}
        />
      : */}
      {/* <View style={styles.Container}> */}
        <Button
          title="+"
          onPress={handleClick}
        />
        <TextInput style={styles.Input}
          type="text"
          onChangeText={text => setValue(text)}
          placeholder="  angle"
          keyboardType="numeric"
          returnKeyLabel="done"
          onSubmitEditing={handleClick}
          value={value}
        />
      {/* </View> */}
      {/* } */}
    </View>
  )
}

export default Add;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center',
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