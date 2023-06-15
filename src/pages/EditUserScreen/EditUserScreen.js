import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import styles from './styles';
import api from '../../services/api';


const EditUserScreen = ({ navigation, route }) => {
  //const { photoData } = route.params;
  const [ user, setUser ] = useState({});
  const [ form, setForm ] = useState({});

  const setFormField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  const handleSaveEdit = async () => {
    if (form.email != "" && form.name != "") {
      const { data, status } = await api.post('/user/updateUser', {
          name: form.name,
          email: form.email
      })
      console.log(data, status);
      if (status === 200) {
        //alert de sucesso
          navigation.navigate('UserScreen');
      }
    }
  }

  const handleCloseEdit = () => {
    console.log("fechar");
  }

  const getData = async () => {
    try {
      const jsonUser = await AsyncStorage.getItem('@user');
      const { _id, email, name, password } = JSON.parse(jsonUser);
      const userData = {_id, name, email, password};
      setUser(userData);    
    } catch(e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getData();
    setForm({...user});
  }, []);

  useEffect(() => {
    console.log("form.name: ", form.name);
    console.log("form.email: ", form.email);
    console.log("form.password: ", form.password)
  }, [ form ])

  return (
    <>
      <View style={styles.userImageContainer}>
        <View style={styles.userImage}>
          <Feather name="user" size={64} color="#B66E6F" />
        </View>

        <TextInput 
          style={styles.inputName}
          placeholder='Nome'
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFormField("name", text) }
          value={form.name}
          underlineColorAndroid="transparent"
          autoCapitalize="none"  
        />
      </View>

      <View style={styles.fields}>
        <View style={styles.dataField}>
          <MaterialCommunityIcons name="email-outline" size={32} color="#B66E6F" />          
          <TextInput 
            style={styles.input}
            placeholder='E-mail'
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setFormField("email", text) }
            value={form.email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"  
          />
        </View>

        <View style={styles.dataField}>
          <Feather name="lock" size={32} color="#B66E6F" />
          <TextInput 
            style={styles.input}
            placeholder='Senha'
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setFormField("password", text) }
            value={form.password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"  
          />
        </View>
      </View>

      <TouchableOpacity 
        style={styles.saveBtn} 
        onPress={handleSaveEdit}
      >
        <Text style={styles.textBtn}>Salvar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.cancelBtn} 
        onPress={handleCloseEdit}
      >
        <Text style={styles.textBtn}>Cancelar</Text>
      </TouchableOpacity>

      
    </>
  )
}

export default EditUserScreen;