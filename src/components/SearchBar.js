import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


const SearchBar = () => {

    return (
        <View style={styles.background}>

            <Image style={styles.image} source={require('../../assets/loupe.png')} />
            < TextInput style = {styles.input} placeholder = "Search" />

        </View>
    )

}

const styles = StyleSheet.create({

    background: {

        backgroundColor: '#F0EEEE',
        marginTop : 10,
        height: 50,
        flexDirection : 'row',
        borderRadius: 5,
        marginHorizontal: 15

    },

    input : {
      fontSize : 19 ,//default is 14
        flex : 1
    },

    image: {
        width: 20,
        height: 20,
        marginHorizontal : 15,
        alignSelf : 'center' // this is to align single item
    }

})

export default SearchBar;