import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import AppHeader from './components/Header';
import SearchBar from './components/SearchBar';

const API_KEY = '11553451-01dd7fcd313d558b5c3957240';
const URL = `https://pixabay.com/api/`;
export default class App extends React.Component {

  onPressSearch = text => {
    this.fetchImages(text, 1);
  }

  fetchImages = async (query, pageNumber=1) => {
    let url = `${URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&page=${pageNumber}`;
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <AppHeader />
        <SearchBar onPressSearch={ this.onPressSearch }/>
      </View>
    );
  }
}


//header
//searchbar
//list of image => imglistitem
