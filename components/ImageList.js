import React from 'react';
import { Flatlist, StyleSheet, View, Text, ScrollView } from 'react-native';
import ImageListItem from './ImageListItem';

const ImageList = ({ images }) => {
  const imageItem = images.map(image => {
    <ImageListItem
      key={image.id}
      image={image}
    />
  })

  return (
    <ScrollView>
      <View>
        {imageItem}
      </View>
    </ScrollView>
  )
}

export default ImageList;
