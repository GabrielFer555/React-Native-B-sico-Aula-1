import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Pressable } from 'react-native';
const dimensionWidth = Dimensions.get('window').width
import Calculadora from './components/calculadora';

export default function App() {

  const [text, setText] = useState('')
  return (
    <Calculadora/>
  );
}

const styles = StyleSheet.create({

});
