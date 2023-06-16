import { View, Text, Alert } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Exit = ({ navigation }) => {

  useEffect(() => {
    Alert.alert('Sair da Conta', 'Tem certeza que deseja sair?', [
      {
        text: 'Cancelar',
        onPress: () => console.log("cancelou a saída"),
        style: 'cancel',
      },
      {text: 'Sair', 
      onPress: async () => {
        try {
          await AsyncStorage.clear();
        } catch(e) {
          console.log(e.message);
        }
        navigation.navigate("LoginScreen");
      },
      style:'default' },
    ])
  }, [])

  return (
    <View style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 20}}>Saindo da Conta</Text>
    </View>
  )
}

export default Exit;