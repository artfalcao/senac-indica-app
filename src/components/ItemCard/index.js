import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from '@expo/vector-icons'; 



const ItemCard = ({ item }) => {


  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <TouchableOpacity /*onPress={handlePress}*/>
          <Image 
            style={styles.image}
            source={{uri: `${item.image}`}}
          />  
        </TouchableOpacity>
      </View>

      <View style={styles.row2}>
        <View style={styles.left}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Categoria: {item.categoria}</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>Local: {item.endereco}</Text>
          </View>
        </View>

        <View style={styles.right}>
          <Ionicons name="location-sharp" size={40} color="#B66E6F" />
        </View>

      </View>
    </View>
  )
} 

export default ItemCard;