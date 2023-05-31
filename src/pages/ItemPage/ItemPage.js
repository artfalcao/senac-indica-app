import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';

const ItemPage = ({ navigation, route }) => {
  //const { photoData } = route.params;
  return (
    <>
      <Image 
        style={styles.imagem}
        //source={{uri: `${photoData.image}`}}
        source={{uri: "https://th.bing.com/th/id/R.817ce2bc8e5b1c9385bc876530aaae45?rik=ABePLPcMe1cXKw&pid=ImgRaw&r=0"}}
      />

      <View style={styles.boxTitle}>
        <Text style={styles.title}>Descrição</Text>
      </View>
      
    </>
  )
}

export default ItemPage;