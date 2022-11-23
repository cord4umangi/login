import React from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

const RadioButtonInput = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text>First</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text>Second</Text>
        </View>
      </View>
    </>
  );
};

export default RadioButtonInput;
