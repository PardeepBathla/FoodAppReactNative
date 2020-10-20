import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'


const SearchScreen = (props) => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {

        return results.filter(result => { return result.price === price })
    }

    // console.log(results);

    return (
        <View  style = {{flex : 1}}>

            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmitted={() => searchApi(term)} />

            { errorMessage ? <Text>{errorMessage} </Text> : null}
            {/* <Text>We have found {results.length} results</Text> */}

            <ScrollView>
                <ResultList results={filterResultsByPrice('$')} title="Cost Effective" navigation = {props.navigation} />
                <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"  navigation = {props.navigation}/>
                {/* <ResultList results={filterResultsByPrice('$$$')} title="Big Spender" navigation = {props.navigation} /> */}
                <ResultList results={filterResultsByPrice('$$')} title="Huge Spender"  navigation = {props.navigation} />


                <Text>{term}</Text>

            </ScrollView>
        </View>

    )

}



const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1,
        marginVertical: 10
    }

})

export default SearchScreen;