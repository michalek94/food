import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResult from '../hooks/useResults';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResult();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <View style={styles.background}>
            <SearchBar 
                searchValue={term} 
                onSearchValueChanged={setTerm}
                onSearchSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length}</Text>
            <ResultsList 
                title='Cost effective' 
                data={filterResultsByPrice('$')}
            />
            <ResultsList 
                title='Big pricier' 
                data={filterResultsByPrice('$$')}
            />
            <ResultsList 
                title='Big spender' 
                data={filterResultsByPrice('$$$')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF'
    }
});

export default SearchScreen;