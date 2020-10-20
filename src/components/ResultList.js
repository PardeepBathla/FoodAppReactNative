import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetails from './ResultDetails';


const ResultList = ({ title, results }) => {
    return (

        <View>
            <Text style={styles.title}>{title}  </Text>
            <FlatList

                horizontal={true}
                data={results}
                keyExtractor={(results) => results.id}

                renderItem={({ item }) => {  // technically item is equal to results

                    return <ResultDetails result={item} />
                }

                }
            />
            {/* <Text>Results is {results.length}</Text> */}
        </View>

    )
}

const styles = StyleSheet.create({

    title: {

        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ResultList;