import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState('');

    return(
        <View style={styles.background}>
            <SearchBar 
                searchValue={searchValue} 
                onSearchValueChanged={newSearchValue => setSearchValue(newSearchValue) }
                onSearchSubmit={() => console.log('on search submit')}
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