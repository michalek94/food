import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ResultsDetails from './ResultsDetails';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, data, navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                data={data}
                keyExtractor={(object) => object.id}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.push('ResultsDetails', { id: item.id })}>
                            <ResultsDetails data={item} />
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 7.5
    }
});

export default withNavigation(ResultsList);