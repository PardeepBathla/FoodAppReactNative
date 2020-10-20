import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultsShow = ({ navigation }) => {

    const [result, setResult] = useState([])
    const id = navigation.getParam('id');

    console.log(result);
    const getResults = async (id) => {

        const response = await yelp.get(`/${id}`)

        setResult(response.data);
    }


    useEffect(() => {

        getResults(id);
    }, []); 

    if(!result){
        return null
    }
    console.log(id)
    return (
        <View>
            <Text> ResultsShow  </Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={style.image} source={{ uri: item }} />
                }} />

        </View>
    )
}


const style = StyleSheet.create({
    image: {
        height: 100,
        width: 100
    }
})

export default ResultsShow;