import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsDetailsScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    const [result, setResult] = useState(null);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }}/>;
                }}>
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 7.5
    }
});

export default ResultsDetailsScreen;