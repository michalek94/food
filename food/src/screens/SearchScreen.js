import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResults';

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchApi, result, errorMessage] = useResult();

    return(
        <View style={styles.background}>
            <SearchBar 
                searchValue={searchValue} 
                onSearchValueChanged={setSearchValue}
                onSearchSubmit={() => searchApi(searchValue)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {result.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFFFFF'
    }
});

export default SearchScreen;