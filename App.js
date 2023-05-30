import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, FilterPage } from './src/pages'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  // const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('Arthur')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{title:`Olá, ${user}`}}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{title:'Entrar'}}
        />
        <Stack.Screen 
          name="Registration" 
          component={RegistrationScreen} 
          options={{title:'Cadastre-se'}}
        />
        <Stack.Screen 
          name="FilterPage" 
          component={FilterPage} 
          options={{title:'Filtros'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

