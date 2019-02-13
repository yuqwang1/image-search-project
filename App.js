import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import AppHeader from './components/Header';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const API_KEY = '11553451-01dd7fcd313d558b5c3957240';
const URL = `https://pixabay.com/api/`;
export default class App extends React.Component {
  state = { loading: false,
            images: []
            }
  onPressSearch = text => {
    this.fetchImages(text, 1);
  }

  fetchImages = async (query, pageNumber=1) => {
    this.setState({ loading: true });
    let url = `${URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&page=${pageNumber}`;
    const response = await fetch(url);
    const json = await response.json();
    json.hits.map(image => {
      console.log(image.previewURL)
    })
    this.setState({ loading: false, images: json.hits });
    };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <AppHeader />
        <SearchBar onPressSearch={ this.onPressSearch } loading={ this.state.loading }/>
        <ImageList
          images={ this.state.images }
          />
      </View>
    );
  }
}
