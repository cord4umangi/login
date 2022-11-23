import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

const TextAreaInput = () => {
  const [text, setText] = useState('');
  return (
    <TextInput
      value={text}
      multiline
      onChangeText={text => setText(text)}
      placeholder="TextArea"
    />
  );
};

export default TextAreaInput;
