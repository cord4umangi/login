import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Slideshow from 'react-native-image-slider-show';

const ImageSliderComp = () => {
  // https://www.npmjs.com/package/react-native-image-slider-show

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setPosition(position === imagesData.length - 1 ? 0 : position + 1);
      // console.log(position);
    }, 2000);

    return () => clearInterval(imgInterval);
  });
  const imagesData = [
    {data: require('../media/1.jpg'), id: 'img-1'},
    {data: require('../media/2.jpg'), id: 'img-2'},
    {data: require('../media/3.jpg'), id: 'img-3'},
  ];

  return (
    <>
      <View>
        <Slideshow
          position={position}
          dataSource={[
            {url: require('../media/1.jpg')},
            {url: require('../media/2.jpg')},
            {url: require('../media/3.jpg')},
          ]}
        />
      </View>
    </>
  );
};

export default ImageSliderComp;
