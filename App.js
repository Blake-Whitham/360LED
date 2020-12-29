import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import TextBox from './components/textInput';
import PanelForm from './components/panelForm';
import Switch from './components/switch';
import Options from './components/options';



export default function App() {
  const [LEDwall, setLEDwall] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <PanelForm />
      <Options onClick={setLEDwall}/>
      <Switch param={LEDwall} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 'auto',
    flexWrap: 'wrap',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',

    alignContent: 'center',
    justifyContent: 'center',
  },
});
