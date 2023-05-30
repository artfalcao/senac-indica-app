import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './styles';

export default function FilterPage({ navigation }) {
  const [ recifeIsSelected, setRecifeIsSelected ] = useState(false);
  const [ olindaIsSelected, setOlindaIsSelected ] = useState(false);
  const [ igarassuIsSelected, setIgarasseIsSelected ] = useState(false);
  const [ naturezaIsSelected, setNaturezaIsSelected ] = useState(false);
  const [ alimentacaoIsSelected, setAlimentacaoIsSelected ] = useState(false);
  const [ fotosDeRuaIsSelected, setFotosDeRuaIsSelected ] = useState(false);
  const [ lazerIsSelected, setLazerIsSelected ] = useState(false);
  const [ porDeSolIsSelected, setPorDeSolIsSelected ] = useState(false);
  const [ praiasIsSelected, setPraiasIsSelected ] = useState(false);


  const [ localSelected, setLocalSelected ] = useState({ 
    includeRecife: false,
    includeOlinda: false,
    includeIgarassu: false
  });
  const [ typeOfPhoto, setTypeOfPhoto ] = useState({
    natureza: false,
    alimentacao: false,
    fotosDeRua: false,
    lazer: false,
    porDeSol: false,
    praias: false
  });

  const handleKeyPress = () => {
    console.log('clicou!')
  }

  useEffect(() => {
    console.log(localSelected);
  }, [localSelected])

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
          setLocalSelected({...localSelected, includeRecife: !recifeIsSelected})
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
        //disableBuiltInState
        onPress={() => {
          setOlindaIsSelected(!olindaIsSelected)
          setLocalSelected({...localSelected, includeOlinda: !olindaIsSelected})
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
        //disableBuiltInState
        onPress={() => {
          setIgarasseIsSelected(!igarassuIsSelected)
          setLocalSelected({...localSelected, includeIgarassu: !igarassuIsSelected})
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
          setTypeOfPhoto({...typeOfPhoto, natureza: !naturezaIsSelected})
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
        //disableBuiltInState
        onPress={() => {
          setAlimentacaoIsSelected(!alimentacaoIsSelected)
          setTypeOfPhoto({...typeOfPhoto, alimentacao: !olindaalimentacaoIsSelectedIsSelected})
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
        //disableBuiltInState
        onPress={() => {
          setFotosDeRuaIsSelected(!fotosDeRuaIsSelected)
          setTypeOfPhoto({...typeOfPhoto, fotosDeRua: !fotosDeRuaIsSelected})
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
        //disableBuiltInState
        onPress={() => {
          setLazerIsSelected(!lazerIsSelected)
          setTypeOfPhoto({...typeOfPhoto, lazer: !lazerIsSelected})
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
        //disableBuiltInState
        onPress={() => {
          setPorDeSolIsSelected(!porDeSolIsSelected)
          setTypeOfPhoto({...typeOfPhoto, porDeSol: !porDeSolIsSelected})
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
        //disableBuiltInState
        onPress={() => {
          setPraiasIsSelected(!praiasIsSelected)
          setTypeOfPhoto({...typeOfPhoto, praias: !praiasIsSelected})
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


