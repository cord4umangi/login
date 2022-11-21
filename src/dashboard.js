import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './css/loginSignup';
const Dashboard = ({navigation}) => {
  const [userName, setUsername] = useState('');
  // useEffect(() => {
  //   // AsyncStorage.clear();
  //   getAsyncItem();
  // }, []);

  // const getAsyncItem = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('auth');
  //     if (value) {
  //       const authJson = JSON.parse(value);
  //       const email = authJson.email;
  //       setUsername(email);
  //       // alert(value);
  //     } else {
  //       navigation.navigate('Login');
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // };
  const Logout = () => {
    // AsyncStorage.removeItem('auth');
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={{alignItems: 'center', marginTop: 80}}>
        <Text>Welcome {userName} </Text>
        <View style={{backgroundColor: 'red', borderRadius: 5, marginTop: 20}}>
          <TouchableOpacity
            onPress={() => {
              Logout();
            }}>
            <Text style={{color: '#ffffff', padding: 5}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Dashboard;
