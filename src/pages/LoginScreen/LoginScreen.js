import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import api from '../../services/api';

export default function LoginScreen({navigation, route}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const storeData = async (user) => {
        try {
          const jsonUser = JSON.stringify(user);
          await AsyncStorage.setItem('@user', jsonUser);
        } catch (e) {
          console.log(e.message);
        }
      }

    const onFooterLinkPress = () => {
        navigation.navigate('RegistrationScreen');
    }

    const onLoginPress = async () => {
        if (email != "" && password != "") {
            const { data, status } = await api.post('/user/login', {
                email: email,
                password: password
            })
            
            if (status === 200) {
                //console.log(data);
                storeData(data);
                navigation.navigate('HomeScreen');
            }
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/indicai-column.png')}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text) }
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Senha'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Ainda não possui uma conta? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Criar Conta</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}