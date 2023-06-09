import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Campains from './src/components/Campains'; 
import OpenCampaigns from './src/components/OpenCampaigns';
import CloseCampaigns from './src/components/CloseCampaigns';
import Donacions from './src/components/Donacions';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({ navigation })}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Campains" component={Campains} />
      <Stack.Screen name="OpenCampaigns" component={OpenCampaigns} />
      <Stack.Screen name="CloseCampaigns" component={CloseCampaigns} />
      <Stack.Screen name="Donacions" component={Donacions} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}



