import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Header, Button } from 'react-native-elements'

export default class App extends React.Component {
  state = { text: '' };

  render() {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;
    return (
      <View style={{flex: 1, backgroundColor: '#ddd'}}>
        <Header
          centerComponent={{text: 'Image Search Proj', style: { color: 'white'}}}
          />
          {/*searchbar*/}
          {/*imglist*/}
        <View style={ containerStyle }>
          <TextInput
            style={ searchTextStyle }
            placeholder="What's your favorite picture"
            value={ this.state.text }
            onChangeText={ text => this.setState({ text })}
            />
          <Button buttonStyle={ buttonStyle } title='Search' onPress={() => console.log('this button was pressed')}/>
        </View>
      </View>

    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginTop: 75,
    marginLeft: 10,
    marginRight: 10
  },
  searchTextStyle: {
    flex: 1
  },
  buttonStyle: {
    height: 40,
    marginBottom: 8
  }
}
//header
//searchbar
//list of image => imglistitem
