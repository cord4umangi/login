import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, TouchableOpacity} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

const Dashboard = ({navigation}) => {
  const [userName, setUsername] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  async function getAuth() {
    const getAuth = await AsyncStorage.getItem('auth');
    if (!getAuth) {
      navigation.navigate('SignIn');
      setIsAuth(true);
    }
  }
  getAuth();

  const Logout = () => {
    AsyncStorage.removeItem('auth');
    // AsyncStorage.clear();
    navigation.replace('SignIn');
  };

  return (
    <>
      <View style={{alignItems: 'center', marginTop: 80}}>
        <Text variant="displaySmall" style={{color: '#fa3b59'}}>
          Welcome
        </Text>
        <Button
          mode="contained"
          onPress={() => Logout()}
          textColor={'#ffffff'}
          style={{backgroundColor: '#fa3b59', borderRadius: 5, marginTop: 30}}>
          Logout
        </Button>
      </View>
    </>
  );
};

export default Dashboard;
