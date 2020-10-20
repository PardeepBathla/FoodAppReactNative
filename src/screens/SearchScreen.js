import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'


const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {

        return results.filter(result => { return result.price === price })
    }

    console.log(results);

    return (
        <View style={styles.background}>

            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmitted={() => searchApi(term)} />

            { errorMessage ? <Text>{errorMessage} </Text> : null}
            <Text>We have found {results.length} results</Text>


            <ResultList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultList results={filterResultsByPrice('$$')} title="Big Spender" />


            <Text>{term}</Text>
        </View>

    )

}


const styless = StyleSheet.create({

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

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    }

})

export default SearchScreen;