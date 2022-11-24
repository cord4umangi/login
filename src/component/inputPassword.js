import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

const PasswordInput = ({
  placeholder,
  backgroundColor,
  mode,
  textColor,
  activeOutlineColor,
}) => {
  const [text, setText] = useState('');
  return (
    <TextInput
      value={text}
      onChangeText={text => setText(text)}
      placeholder={placeholder}
      mode={mode}
      textColor={textColor ? textColor : '#000000'}
      activeOutlineColor={activeOutlineColor ? activeOutlineColor : '#000000'}
      style={{
        backgroundColor: `${backgroundColor ? backgroundColor : '#ffffff'}`,
      }}
      secureTextEntry
    />
  );
};

export default PasswordInput;
