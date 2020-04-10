import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const ResultsList = ({ title, data }) => {
    console.log(data)
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{data.length}</Text>
            <FlatList 
                horizontal={true}
                data={data}
                keyExtractor={(object) => object.id}
                renderItem={({item}) => {
                    return <Text>{item.name}</Text>
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;