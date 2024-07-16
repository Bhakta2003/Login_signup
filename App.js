import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './components/GetStarted';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>{
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name='Welcome' component={GetStarted} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
