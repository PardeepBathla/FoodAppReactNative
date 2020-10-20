import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails';


const ResultList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }
    return (

        <View style={styles.container}>


            <Text style={styles.title}>{title}  </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={(results) => results.id}

                renderItem={({ item }) => {  // technically item is equal to results

                    return (
                        <TouchableOpacity

                            onPress={() =>
                                navigation.navigate('ResultsShow', { id: item.id })
                            }
                        >
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    );
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
        fontWeight: 'bold',
        marginLeft: 15
    },
    container: {
        marginBottom: 10
    }
})

export default ResultList;