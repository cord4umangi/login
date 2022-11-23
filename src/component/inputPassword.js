import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

const PasswordInput = () => {
  const [text, setText] = useState('');
  return (
    <TextInput
      value={text}
      onChangeText={text => setText(text)}
      placeholder="Password"
      secureTextEntry
    />
  );
};

export default PasswordInput;
