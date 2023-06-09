import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

function Register({ navigation }) {
  const [name, setName] = useState('');
  const [surname1, setSurname1] = useState('');
  const [surname2, setSurname2] = useState('');
  const [idCard, setIdCard] = useState('');
  const [address, setAddress] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Aquí puedes manejar el envío del formulario
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nombre"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Primer Apellido:</Text>
        <TextInput
          style={styles.input}
          value={surname1}
          onChangeText={setSurname1}
          placeholder="Primer Apellido"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Segundo Apellido:</Text>
        <TextInput
          style={styles.input}
          value={surname2}
          onChangeText={setSurname2}
          placeholder="Segundo Apellido"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Carnet:</Text>
        <TextInput
          style={styles.input}
          value={idCard}
          onChangeText={setIdCard}
          placeholder="Carnet"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Dirección:</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Dirección"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Celular:</Text>
        <TextInput
          style={styles.input}
          value={cellphone}
          onChangeText={setCellphone}
          placeholder="Celular"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Usuario:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Usuario"
          placeholderTextColor="#999"
        />
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Contraseña"
          placeholderTextColor="#999"
        />

        <Button title="Registrarse" onPress={() => handleSubmit()} />
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default Register;



