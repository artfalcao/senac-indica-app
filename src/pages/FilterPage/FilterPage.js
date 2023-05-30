import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './styles';

export default function FilterPage({ route, navigation }) {
  const { filterLocals, filterTypes } = route.params;

  const [ recifeIsSelected, setRecifeIsSelected ] = useState(filterLocals.includes('recife'));
  const [ olindaIsSelected, setOlindaIsSelected ] = useState(filterLocals.includes('olinda'));
  const [ igarassuIsSelected, setIgarassuIsSelected ] = useState(filterLocals.includes('igarassu'));

  const [ naturezaIsSelected, setNaturezaIsSelected ] = useState(filterTypes.includes('natureza'));
  const [ alimentacaoIsSelected, setAlimentacaoIsSelected ] = useState(filterTypes.includes('alimentacao'));
  const [ fotosDeRuaIsSelected, setFotosDeRuaIsSelected ] = useState(filterTypes.includes('fotosDeRua'));
  const [ lazerIsSelected, setLazerIsSelected ] = useState(filterTypes.includes('lazer'));
  const [ porDeSolIsSelected, setPorDeSolIsSelected ] = useState(filterTypes.includes('porDeSol'));
  const [ praiasIsSelected, setPraiasIsSelected ] = useState(filterTypes.includes('praias'));


  const handleKeyPress = () => {  
    let localsToFilter = [];
    let typesToFilter = [];

    if (recifeIsSelected) localsToFilter.push('recife');
    if (olindaIsSelected) localsToFilter.push("olinda");
    if (igarassuIsSelected) localsToFilter.push("igarassu");

    if (naturezaIsSelected) typesToFilter.push("natureza");
    if (alimentacaoIsSelected) typesToFilter.push("alimentacao");
    if (fotosDeRuaIsSelected) typesToFilter.push("fotos de rua");
    if (lazerIsSelected) typesToFilter.push("lazer");
    if (porDeSolIsSelected) typesToFilter.push("por de sol");
    if (praiasIsSelected) typesToFilter.push("praia");

    navigation.navigate('Home', {filterLocals : localsToFilter, filterTypes: typesToFilter});

  }

  return (
    <>
    <View style={styles.titleArea}>
      <Text style={styles.title}>LOCAIS</Text>
    </View>
    <View style={styles.checkboxContainer}>
      <BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={recifeIsSelected}
        text="Recife"
        disableBuiltInState
        onPress={() => {
          setRecifeIsSelected(!recifeIsSelected)
        }}
      />

      <BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={olindaIsSelected}
        text="Olinda"
        disableBuiltInState
        onPress={() => {
          setOlindaIsSelected(!olindaIsSelected)
        }}
      />

<BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={igarassuIsSelected}
        text="Igarassu"
        disableBuiltInState
        onPress={() => {
          setIgarassuIsSelected(!igarassuIsSelected)
        }}
      />
    </View>

    <View style={styles.titleArea}>
      <Text style={styles.title}>ESTILOS</Text>
    </View>
    <View style={styles.checkboxContainer}>
      <BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={naturezaIsSelected}
        text="Natureza"
        disableBuiltInState
        onPress={() => {
          setNaturezaIsSelected(!naturezaIsSelected)
        }}
      />

      <BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={alimentacaoIsSelected}
        text="Alimentação"
        disableBuiltInState
        onPress={() => {
          setAlimentacaoIsSelected(!alimentacaoIsSelected)
        }}
      />

      <BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={fotosDeRuaIsSelected}
        text="Fotos de Rua"
        disableBuiltInState
        onPress={() => {
          setFotosDeRuaIsSelected(!fotosDeRuaIsSelected)
        }}
      />

      <BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={lazerIsSelected}
        text="Espaços Culturais e Lazer"
        disableBuiltInState
        onPress={() => {
          setLazerIsSelected(!lazerIsSelected)
        }}
      />

      <BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={porDeSolIsSelected}
        text="Pores de Sol"
        disableBuiltInState
        onPress={() => {
          setPorDeSolIsSelected(!porDeSolIsSelected)
        }}
      />

      <BouncyCheckbox
        size={24}
        fillColor="#B66E6F"
        unfillColor="#FFFFFF"
        iconStyle={{ borderColor: "#B66E6F", borderRadius: 0, }}
        style={{marginLeft: 32, marginTop: 12}}
        textStyle={{textDecorationLine: "none", fontSize: 20, }}
        innerIconStyle={{borderRadius: 0, }}
        isChecked={lazerIsSelected}
        text="Praias"
        disableBuiltInState
        onPress={() => {
          setPraiasIsSelected(!praiasIsSelected)
        }}
      />
    </View>

    <TouchableOpacity 
      style={styles.btnBox}
      onPress={handleKeyPress}
    >
      <Text style={styles.btnText} >APLICAR</Text>
    </TouchableOpacity>
    
      
    </>
  )
}


