import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultDetails = ({ result }) => {

    return (                
        <View style = {styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style >{result.rating} Stars {result.review_count} Reviews</Text>
        </View>
    )


}


const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom : 5
    },
    name: {
        fontWeight: 'bold'
    },
    container: {
        marginLeft: 15
    }
})
export default ResultDetails;