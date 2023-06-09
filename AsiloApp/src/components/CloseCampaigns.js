import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function CloseCampaigns({ navigation }) {
  // Datos de ejemplo para las campañas cerradas
  const campaigns = [
    { id: 1, name: 'Campaña 1', establishment: 'Establecimiento 1', image: 'https://picsum.photos/200' },
    { id: 2, name: 'Campaña 2', establishment: 'Establecimiento 2', image: 'https://picsum.photos/200' },
    { id: 3, name: 'Campaña 3', establishment: 'Establecimiento 3', image: 'https://picsum.photos/200' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campañas Cerradas:</Text>
      {campaigns.map(campaign => (
        <View key={campaign.id} style={styles.campaign}>
          <Image source={{ uri: campaign.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{campaign.name}</Text>
            <Text style={styles.establishment}>{campaign.establishment}</Text>
           
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
  
});

export default CloseCampaigns;
