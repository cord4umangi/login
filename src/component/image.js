import React from 'react';
import {Image, View} from 'react-native';
const ImageComp = () => {
  return (
    <>
      {
        <View
          style={{
            // backgroundColor: 'red',
            alignItems: 'center',
            height: 220,
            width: '100%',
          }}>
          <Image
            source={require('../media/refer1.jpg')}
            resizeMode="center"
            style={{flex: 1}}
          />
        </View>
      }
    </>
  );
};

export default ImageComp;
