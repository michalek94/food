import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetails = ({ data }) => {
    return(
        <View style={styles.container}>
            <Image source={{ uri: data.image_url }} style={styles.image}></Image>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.rating} stars, {data.review_count} reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 7.5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetails;