import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';

const ItemScreen = ({ navigation, route }) => {
  //const { photoData } = route.params;
  return (
    <>
      <Image 
        style={styles.imagem}
        //source={{uri: `${photoData.image}`}}
        source={{uri: ""}}
      />

      <View style={styles.boxTitle}>
        <Text style={styles.title}>Descrição: É um lugar muito lindo</Text>
      </View>
      
    </>
  )
}

export default ItemScreen;

