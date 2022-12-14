import React from 'react';
import {View, PermissionsAndroid} from 'react-native';
import TextComp from './textComp';
import {Button} from 'react-native-paper';

const PermissionComp = () => {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'needs access to your camera ' + 'so you can take pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert('You can use the camera');
      } else {
        alert('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <>
      <Button
        mode="contained"
        buttonColor="#fa3b59"
        textColor="#ffffff"
        style={{
          borderRadius: 5,
        }}
        onPress={() => {
          requestCameraPermission();
        }}>
        Get Permission
      </Button>
    </>
  );
};

export default PermissionComp;
