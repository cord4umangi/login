import React from 'react';
import {View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import TextComp from './textComp';
const RadioButtonInput = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="first"
            color={'#fa3b59'}
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <TextComp varient={'bodyMedium'} textTitle={'First'} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="second"
            color={'#fa3b59'}
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <TextComp varient={'bodyMedium'} textTitle={'Second'} />
        </View>
      </View>
    </>
  );
};

export default RadioButtonInput;
