import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultsDetails from '../components/ResultsDetails';

const ResultsDetailsScreen = ({ navigation }) => {
    console.log(navigation.getParam('id'));
    return(
        <View>
            <Text> ResultsDetailsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ResultsDetailsScreen;