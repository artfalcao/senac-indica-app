import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, FilterPage, ItemPage } from './src/pages'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{title:'Home'}}
          initialParams={{ filterLocals : [], filterTypes: [] }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{title:'Entrar'}}
          initialParams={{ userName: "" }}
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
        {/* <Stack.Screen 
          name="ItemPage" 
          component={ItemPage} 
          options={{title:'Página da Indicação'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

