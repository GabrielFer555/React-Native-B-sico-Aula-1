import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Pressable } from 'react-native';
const dimensionWidth = Dimensions.get('window').width


export default function Message() {

  const [text, setText] = useState('')
  return (
  <View style={styles.container}>
    <View style={{flex: 1, backgroundColor:'green', width:dimensionWidth}}>
      <Text>App</Text>
    </View>
    <View style={styles.messageChat}>
      <Text style={styles.textDisplay}>{text}</Text>
    </View>
    <View style={styles.messageBox}>
      <TextInput style={styles.inputStyle}
      placeholder='Informe sua mensagem'
      onChangeText={newText => setText(newText)}/>
      <Pressable style={styles.sendButton}><Text style={styles.textButton}>Enviar</Text></Pressable>
    </View>
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  messageChat:{
    flex:6
  },
  messageBox:{
    flex:1,
    width:dimensionWidth,
    flexDirection:'row'
  },
  inputStyle: {
    height:60,
    width:dimensionWidth * 0.8,
    padding: 10,
    padding: 10,
    borderBottomWidth: 2,
    borderStyle:'solid',
    borderColor:'#000',
    borderCurve: 'circular',
    outlineWidth: 0
  },
  textDisplay:{
    textTransform:'uppercase'
  },
  sendButton: {
    color: '#fff',
    backgroundColor: 'green',
    width:dimensionWidth * 0.2,
    height:60,
    borderColor:'#fff',
    borderRadius:15,
    borderStyle:'solid',
    borderWidth:2,
    borderCurve:'circular',
    paddingVertical:15
  },
  textButton:{
    color:'#fff',
    justifyContent:'center',
    textAlign:'center',
    flexDirection:'row'
  }
});

