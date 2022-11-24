import React from 'react';
// import {Text} from 'react-native';
import {Text} from 'react-native-paper';

const TextComp = ({textVariant, textTitle, customTextColor}) => {
  return (
    <>
      <Text
        variant={textVariant}
        style={{color: `${customTextColor ? customTextColor : '#000000'}`}}>
        {textTitle}
      </Text>
    </>
  );
};

export default TextComp;
