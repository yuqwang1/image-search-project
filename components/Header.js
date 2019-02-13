import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

const AppHeader = () => (
    <View>
      <Header
      centerComponent={{text: 'Image Search Project', style: { color: 'white'}}}
      />
    </View>
  )



export default AppHeader;
