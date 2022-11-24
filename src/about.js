import React from 'react';
import {View} from 'react-native';
import TextComp from './component/textComp';
const About = () => {
  return (
    <>
      <View>
        <TextComp
          textVariant="headlineMedium"
          customTextColor={'#fa3b59'}
          textTitle={'About'}
        />
      </View>
    </>
  );
};

export default About;
