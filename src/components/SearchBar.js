import React from 'react'
import { Text, View, StyleSheet, Image, TextInput } from 'react-native'


const SearchBar = ({ term, onTermChange,onTermSubmitted }) => {

    return (
        <View style={styles.background}>

            <Image style={styles.image} source={require('../../assets/loupe.png')} />
            < TextInput
                autoCapitalize='characters'
                autoCorrect={false}
                style={styles.input}
                placeholder="Search"
                value={term}
                onChangeText={ onTermChange}
                onSubmitEditing={onTermSubmitted}
            />

        </View>
    )

}

const styles = StyleSheet.create({

    background: {

        backgroundColor: '#F0EEEE',
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        borderRadius: 5,
        marginHorizontal: 15

    },

    input: {
        fontSize: 19,//default is 14
        flex: 1
    },

    image: {
        width: 20,
        height: 20,
        marginHorizontal: 15,
        alignSelf: 'center' // this is to align single item
    }

})

export default SearchBar;