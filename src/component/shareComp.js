import React from 'react';
import {Share, View} from 'react-native';
import {Button} from 'react-native-paper';
import TextComp from './textComp';

const ShareComp = () => {
  const onShare = () => {
    Share.share({
      message: 'Hello, How Are You ?',
    })
      //after successful share return result
      .then(result => console.log(result))
      //If any thing goes wrong it comes here
      .catch(errorMsg => console.log(errorMsg));
  };
  return (
    <View style={{marginTop: 10}}>
      <View style={{flexDirection: 'row'}}>
        <TextComp
          textVariant={'bodyMedium'}
          textTitle={'Message is : '}
          customTextColor={'#fa3b59'}
        />
        <TextComp
          textVariant={'bodyMedium'}
          textTitle={'Hello, How Are You ? '}
        />
      </View>
      <Button
        mode="contained"
        onPress={() => onShare()}
        textColor={'#ffffff'}
        style={{
          backgroundColor: '#fa3b59',
          borderRadius: 5,
          marginTop: 5,
        }}>
        Share Message
      </Button>
    </View>
  );
};

export default ShareComp;
