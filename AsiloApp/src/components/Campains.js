import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Campains({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campañas</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CloseCampaigns')}
      >
        <Text style={styles.buttonText}>Ver campañas cerradas</Text>
      </TouchableOpacity>
      
        <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('OpenCampaigns')}
        >
       <Text style={styles.buttonText}>Ver campañas abiertas</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('OpenCampaigns')}
        >
       <Text style={styles.buttonText}>Donaciones Realizadas </Text>
      </TouchableOpacity>

        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
  }
});


export default Campains;
