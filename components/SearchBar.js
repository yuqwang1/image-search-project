import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { Button } from 'react-native-elements'

class SearchBar extends Component {
  state = { text: '' };

  render() {
    const {
      containerStyle,
      searchTextStyle,
      buttonStyle
    } = styles;


    return (
      <View style={ containerStyle }>
      <TextInput
      style={ searchTextStyle }
      placeholder="What's your favorite picture"
      value={ this.state.text }
      onChangeText={ text => this.setState({ text })}
      />
      <Button
        buttonStyle={ buttonStyle }
        title={ this.props.loading ? 'Loading...' : 'Search' } 
        onPress={ () => this.props.onPressSearch(this.state.text) }/>
      </View>

    )
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

export default SearchBar;
