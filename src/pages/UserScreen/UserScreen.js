import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import styles from './styles';

const UserScreen = ({ navigation, route }) => {
  //const { photoData } = route.params;
  return (
    <>
      <View style={styles.userImageContainer}>
        <View style={styles.userImage}>
          <Feather name="user" size={64} color="#B66E6F" />
        </View>

        <Text style={styles.userName}>Arthur Teste</Text>
      </View>

      <View style={styles.fields}>
        <View style={styles.dataField}>
        <MaterialCommunityIcons name="email-outline" size={32} color="#B66E6F" />          
        <Text style={styles.userData}>arthur@teste.com</Text>
        </View>

        <View style={styles.dataField}>
          <Feather name="lock" size={32} color="#B66E6F" />
          <Text style={styles.userData}>arthur123</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.editBtn} 
        /*onPress={handleOpenEdit}*/
      >
        <Text style={styles.textBtn}>Editar</Text>
      </TouchableOpacity>

      
    </>
  )
}

export default UserScreen;