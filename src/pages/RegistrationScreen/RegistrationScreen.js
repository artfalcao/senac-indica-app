import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import api from '../../services/api';

export default function RegistrationScreen({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onRegisterPress = async () => {
        console.log(name, email, password);
        if (password === confirmPassword && name != "" && email != "" && password != "") {
            try {
                const { status, data } = await api.post('/user/createUser', {
                    name: name,
                    email: email,
                    password: password
                })
                
                if (status === 201) {
                    Alert.alert(data.msg);
                    setEmail("");
                    setName("");
                    setPassword("");
                    setConfirmPassword("");
                    navigation.navigate('LoginScreen')
                } else {
                    Alert.alert("Erro ao criar usuário.")
                }
            } catch (e) {
                console.log("error: ", e.message);
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
                    placeholder='Nome'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setName(text)}
                    value={name}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
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
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirme a senha'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Criar conta</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Já possui uma conta? <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.footerLink}>Entrar</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}