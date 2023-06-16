import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import styles from './styles';

const UserScreen = ({ navigation, route }) => {
  const [user, setUser] = useState({});

  const handleOpenEdit = () => {
    navigation.navigate('EditUserScreen');
  }

  const handleDelete = async () => {
    const { data, status } = await api.delete('/user/deleteUser', {
      email: user.email
    });
    console.log(data, user)

    if (status === 200) {
      Alert.alert("Conta excluida com sucesso!");
      try {
        await AsyncStorage.clear();
      } catch(e) {
        console.log(e.message);
      }
      navigation.navigate("LoginScreen");
    }
  }

  const handleOpenDelete = () => {
    Alert.alert('Excluir Conta', 'Tem certeza que deseja excluir sua conta?', [
      {
        text: 'Cancelar',
        onPress: () => console.log("cancelou a deleção"),
        style: 'cancel',
      },
      {text: 'Excluir', 
      onPress: () => handleDelete,
      style:'default' },
    ]);
  }

  const getData = async () => {
    try {
      const jsonUser = await AsyncStorage.getItem('@user');
      const { _id, email, name, password } = JSON.parse(jsonUser);
      const userData = {_id, name, email, password};
      setUser({...userData});    
    } catch(e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <View style={styles.userImageContainer}>
        <View style={styles.userImage}>
          <Feather name="user" size={64} color="#B66E6F" />
        </View>

        <Text style={styles.userName}>{user.name}</Text>
      </View>

      <View style={styles.fields}>
        <View style={styles.dataField}>
        <MaterialCommunityIcons name="email-outline" size={32} color="#B66E6F" />          
        <Text style={styles.userData}>{user.email}</Text>
        </View>

        <View style={styles.dataField}>
          <Feather name="lock" size={32} color="#B66E6F" />
          <Text style={styles.userData}>{user.password}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.editBtn} 
        onPress={handleOpenEdit}
      >
        <Text style={styles.textBtn}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.deleteBtn} 
        onPress={handleOpenDelete}
      >
        <Text style={styles.textBtn}>Deletar</Text>
      </TouchableOpacity>

      
    </>
  )
}

export default UserScreen;