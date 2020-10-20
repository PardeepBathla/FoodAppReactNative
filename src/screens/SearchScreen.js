import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'


const SearchScreen = () => {

    return (
        <View style = {styles.background}>
            <SearchBar />
            <Text>Search Screen</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    background:{
        backgroundColor : 'white',
        flex:1
    }

})

export default SearchScreen;