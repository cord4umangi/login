import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import styles from './css/dashboardcss';
import NormalInput from './component/notmalInput';
import PasswordInput from './component/inputPassword';
import TextAreaInput from './component/textArea';
import Multiselect from './component/multiselect';
import RadioButtonInput from './component/radiobutton';
import CollapseExpand from './component/collapse';

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
      <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <View style={styles.bodyView}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text variant="displaySmall" style={{color: '#fa3b59'}}>
              Welcome
            </Text>
            <Button
              mode="contained"
              onPress={() => Logout()}
              textColor={'#ffffff'}
              style={{
                backgroundColor: '#fa3b59',
                borderRadius: 5,
                marginTop: 30,
              }}>
              Logout
            </Button>
          </View>
          <View style={{marginTop: 20}}>
            <Text variant="bodyMedium">Normal Input</Text>
            <NormalInput />
            <Text variant="bodyMedium">Password Input</Text>
            <PasswordInput />
            <Text variant="bodyMedium">TextArea</Text>
            <TextAreaInput />
            <Text variant="bodyMedium">MultiSelect</Text>
            <Multiselect />
            <Text variant="bodyMedium">RadioButton</Text>
            <RadioButtonInput />
            <Text variant="bodyMedium">Collapse Expand</Text>
            <CollapseExpand />
          </View>
        </View>
      </ScrollView>
      {/* <View style={{alignItems: 'center', marginTop: 80}}>
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
        <View>
          <NormalInput />
        </View>
      </View> */}
    </>
  );
};

export default Dashboard;
