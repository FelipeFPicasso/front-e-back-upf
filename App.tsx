import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaEventos from './components/screens/ListaEventos';
import EdicaoEvento from './components/screens/editar/EditarEvento';
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={ListaEventos}
          options={{ title: 'Eventos' }} />
        <Stack.Screen name="EdicaoEvento" component={EdicaoEvento}
          options={{ title: 'Editar Evento' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}