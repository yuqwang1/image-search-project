import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
      <Header
        centerComponent={{text: 'Image Search Proj', style: { color: 'white'}}}
        />
        {/*searchbar*/}
        {/*imglist*/}
      </View>
    );
  }
}

//header
//searchbar
//list of image => imglistitem
