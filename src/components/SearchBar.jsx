import React from 'react';
import TextInput from './TextInput';
import theme from '../theme';
import {  StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    textInput: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: theme.colors.mainPrimary,
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 10,
      backgroundColor: theme.colors.tabText,
      margin: 10
    },
  })
  

const SearchBar = ({ searchValue, handleSearch }) => {

  return (
    <TextInput style={styles.textInput} placeholder="Search" onChangeText={handleSearch}
    value={searchValue}/>
  );
};

export default SearchBar;