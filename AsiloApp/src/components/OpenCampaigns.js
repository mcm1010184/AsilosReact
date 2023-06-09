import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function OpenCampaigns({ navigation }) {
  // Datos de ejemplo para las campañas abiertas
  const campaigns = [
    { id: 1, name: 'Campaña 1', establishment: 'Establecimiento 1', image: 'https://picsum.photos/200' },
    { id: 2, name: 'Campaña 2', establishment: 'Establecimiento 2', image: 'https://picsum.photos/200' },
    { id: 3, name: 'Campaña 3', establishment: 'Establecimiento 3', image: 'https://picsum.photos/200' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campañas abiertas:</Text>
      {campaigns.map(campaign => (
        <View key={campaign.id} style={styles.campaign}>
          <Image source={{ uri: campaign.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{campaign.name}</Text>
            <Text style={styles.establishment}>{campaign.establishment}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonDetails]}
                onPress={() => {}}
              >
                <Text style={[styles.buttonText, styles.buttonDetailsText]}>Ver detalles</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonDonate]}
                onPress={() => navigation.navigate('Donacions')}
              >
                <Text style={[styles.buttonText, styles.buttonDonateText]}>Donar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
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
  campaign: {
    flexDirection: 'row',
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

export default OpenCampaigns;

