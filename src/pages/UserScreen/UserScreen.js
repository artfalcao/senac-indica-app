import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';

const UserScreen = ({ navigation, route }) => {
  //const { photoData } = route.params;
  return (
    <>
      <View style={styles.boxTitle}>
        <Text style={styles.title}> UserScreen </Text>
      </View>
      
    </>
  )
}

export default UserScreen;