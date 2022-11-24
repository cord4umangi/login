import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import styles from './css/dashboardcss';
import NormalInput from './component/notmalInput';
import PasswordInput from './component/inputPassword';
import TextAreaInput from './component/textArea';
import Multiselect from './component/multiselect';
import RadioButtonInput from './component/radiobutton';
import CollapseExpand from './component/collapse';
import Accordion from './component/accordian';
import TextComp from './component/textComp';
import ImageComp from './component/image';

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
            <TextComp
              textVariant="headlineMedium"
              customTextColor={'#fa3b59'}
              textTitle={'Welcome'}
            />

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

            <Button
              mode="contained"
              onPress={() => {
                navigation.navigate('About');
              }}
              textColor={'#ffffff'}
              style={{
                backgroundColor: '#fa3b59',
                borderRadius: 5,
                marginTop: 30,
              }}>
              Go to About
            </Button>
          </View>
          <View style={{marginTop: 20}}>
            <TextComp textVariant={'bodyMedium'} textTitle={'Normal Input'} />
            <NormalInput
              placeholder={'Normal Input'}
              mode="outlined"
              activeOutlineColor="#000000"
            />

            <TextComp textVariant={'bodyMedium'} textTitle={'Password Input'} />
            <PasswordInput
              placeholder={'Normal Input'}
              mode="outlined"
              activeOutlineColor="#000000"
            />

            <TextComp textVariant={'bodyMedium'} textTitle={'TextArea'} />
            <TextAreaInput
              placeholder={'Textarea'}
              mode="outlined"
              activeOutlineColor="#000000"
            />

            <TextComp textVariant={'bodyMedium'} textTitle={'MultiSelect'} />
            <Multiselect />

            <TextComp textVariant={'bodyMedium'} textTitle={'RadioButton'} />
            <RadioButtonInput />

            {/* <TextComp varient={'bodyMedium'} textTitle={'Collapse Expand'} /> */}
            {/* <CollapseExpand /> */}
            <TextComp textVariant={'bodyMedium'} textTitle={'Accordian'} />
            {/* <Accordion /> */}
            <TextComp textVariant={'bodyMedium'} textTitle={'Image'} />
            <ImageComp />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Dashboard;
