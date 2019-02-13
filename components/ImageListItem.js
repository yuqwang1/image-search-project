import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageListItem = ({ image }) => {
  const { imageStyle } = styles;
  return (
      <View>
        <Image
            source={{ uri: image.previewURL }}
            style={ imageStyle }
        />
        <Text>{ image.tag }</Text>
        <Text>{ image.user }</Text>
        <Text>{ image.view }</Text>
      </View>
  );
};

const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    height: 180.
  }
}

export default ImageListItem;
