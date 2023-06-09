import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

function Donacions({ navigation }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleDonate = () => {
    setMessage('Donación realizada');
    setTimeout(() => {
      setMessage('');
      navigation.goBack();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donación:</Text>
      <TextInput
        style={styles.input}
        placeholder="Cantidad"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={[styles.button, styles.buttonDonate]}
        onPress={handleDonate}
      >
        <Text style={[styles.buttonText, styles.buttonDonateText]}>Donar</Text>
      </TouchableOpacity>
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
   input:{
     borderWidth:1,
     borderColor:'#ddd',
     paddingVertical:10,
     paddingHorizontal:15,
     borderRadius:5,
     marginBottom:10
   },
   campaign:{
     flexDirection:'row',
     alignItems:'center',
   },
   buttons:{
     flexDirection:'row',
     justifyContent:'flex-start'
   },
   button:{
     marginHorizontal:5,
     paddingVertical:5,
     paddingHorizontal:10,
     borderRadius:5
   },
   buttonText:{
     color:'#fff'
   },
   buttonDetails:{
     backgroundColor:'#007aff'
   },
   buttonDonate:{
     backgroundColor:'#34c759'
   }
});

export default Donacions;
