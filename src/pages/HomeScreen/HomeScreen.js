import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AntDesign } from '@expo/vector-icons';
import ItemCard from '../../components/ItemCard';
import styles from './styles';
import api from '../../services/api';

export default function HomeScreen({ route, navigation }) {
    const [ search, setSearch ] = useState("");
    const [ data, setData ] = useState([]);

    const { filterLocals, filterTypes, busca, cleared } = route.params;

    const renderItem = ({item}) => {
      return (
        <ItemCard item={item} handlePress={goToItemPage(item._id)} />
      )
    }

    const goToItemPage = async (photoId) => {
      const { data: photoData } = await api.get(`/indicacao/${photoId}`);
      console.log(photoData);
      navigation.navigate('ItemScreen', {
        photoData: photoData
      })
    }

    const filterByLocal = async () => {
        console.log(filterLocals[0]);
        const {data: DATA} = await api.get(`/search?item=${filterLocals[0]}`);
        setData(DATA);
      
    }

    const filterByTypes = async () => {
      const typesStringfy = filterTypes.toString();
      console.log(typesStringfy);
      const { data: DATA } = await api.get(`/categorias?items=${typesStringfy}`);
      setData(DATA);
    }

    const handleOpenFilter = () => {
      navigation.navigate('FilterScreen', {filterLocals, filterTypes});
    }

    // const handleCloseFilterTag = () => {
    //   console.log("clicou!")
    // }

    const handleSubmit = async () => {
      const { data: DATA } = await api.get(`/search?item=${search}`);
      setData(DATA);
    }

    const reRender = async () => {
      setSearch("");
      const { data: DATA } = await api.get('/indicacao');
      setData(DATA);
    }

    useEffect(() => {
        reRender();
      }, [])

    useEffect(() => {
      if (cleared === true) reRender();
      if (busca === "") {
        if (filterLocals.length > 0) filterByLocal();
        if (filterTypes.length > 0) filterByTypes();
      }
    }, [route.params])
        

    return (
        <>
        <View style={styles.header}>
            <KeyboardAwareScrollView>
                <View style={styles.row1}>
                  <TouchableOpacity onPress={reRender}>
                    <Image 
                      style={styles.logo}
                      source={require('../../../assets/indicai-row.png')}
                    />
                  </TouchableOpacity>
                    

                    <Text style={styles.local}>Recife, PE</Text>
                </View>

                <View style={styles.searchBox}>
                  <TextInput
                      style={styles.input}
                      placeholder='Insira sua busca aqui'
                      placeholderTextColor="#aaaaaa"
                      onChangeText={(text) => setSearch(text)}
                      value={search}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      onSubmitEditing={handleSubmit}
                  />
                </View>
            </KeyboardAwareScrollView>
        </View>

         <View style={styles.row2}>
            <TouchableOpacity 
              style={styles.filterTag} 
              onPress={handleOpenFilter}
            >
                <AntDesign name="filter" size={24} color="#B66E6F" />
                <Text style={styles.filterTagText}>Filtrar por...</Text>
            </TouchableOpacity>

          
            {filterLocals.length > 0 && filterLocals.map((item, index) => (
              <TouchableOpacity 
                style={styles.filterTagActive}
                //onPress={handleCloseFilterTag}
              >
                <Text keyExtractor={index} style={styles.filterTagText}>{item}</Text>
                {/* <AntDesign name="close" size={24} color="black" /> */}
              </TouchableOpacity>
            ))}

            {filterTypes.length > 0 && filterTypes.map((item, index) => (
              <TouchableOpacity 
                style={styles.filterTagActive}
                //onPress={handleCloseFilterTag}
              >
                <Text keyExtractor={index} style={styles.filterTagText}>{item}</Text>
                {/* <AntDesign name="close" size={24} color="black" /> */}
              </TouchableOpacity>
            ))}
            
        </View>

          <FlatList
            //ListHeaderComponent={}
            //ItemSeparatorComponent={}
            style={styles.cardList}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </>
    )
}