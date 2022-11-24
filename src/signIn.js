import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
// import {Button} from 'react-native-paper';
import {Text, TextInput, Button} from 'react-native-paper';
import styles from './css/signupcss';
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isDisplayInvalidPassword, setIsDisplayInvalidPassword] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      setIsLoading(false);
      alert('Invalid Email');
    } else {
      const value = await AsyncStorage.getItem('regAuth');
      if (value) {
        const authJson = JSON.parse(value);
        const regEmail = authJson.email;
        const regPass = authJson.password;

        if (regEmail === email && regPass === password) {
          const userJson = {email: email, password: password};
          const userCred = JSON.stringify(userJson);
          try {
            await AsyncStorage.setItem('auth', userCred);
            setIsLoading(false);
            navigation.replace('DrawerNav');
          } catch (e) {
            // saving error
            setIsLoading(false);
            alert('e', e);
          }
          // alert(email);
          // alert(password);
        } else {
          setIsLoading(false);
          alert('invalid user credentials');
        }
      } else {
        setIsLoading(false);
        alert('you are not registered');
      }
    }
  };

  const checkPasswordVisibility = () => {
    if (isVisiblePassword === true) {
      setIsVisiblePassword(false);
      setIsSecureTextEntry(true);
    } else {
      setIsVisiblePassword(true);
      setIsSecureTextEntry(false);
    }
  };
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
        {/* <View style={{flex: 1, backgroundColor: '#ffffff'}}> */}
        <View style={styles.bodyView}>
          <View style={styles.LogoImgParent}>
            <Image
              style={styles.LogoImg}
              // resizeMode="center"
              resizeMode={'contain'}
              source={require('./media/logo-light.png')}
            />
          </View>
          <View style={styles.headerTextParent}>
            <Text style={styles.headerText}>Welcome back</Text>
            <Text style={styles.headerTextSmall}>
              You can search cource, apply cource and find scholarship for abord
              studies
            </Text>
          </View>
          <View style={styles.mainBtnParent}>
            <TouchableOpacity style={styles.btnTouchable}>
              <View style={styles.btnParent}>
                <Image
                  style={styles.buttonImg}
                  source={require('./media/google.png')}
                />
                <Text
                  style={[
                    styles.ml_10,
                    styles.font_poppins,

                    styles.font_black,
                    styles.fgBtnText,
                  ]}>
                  Google
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTouchable}>
              <View style={styles.btnParent}>
                <Image
                  style={styles.buttonImg}
                  source={require('./media/facebook.png')}
                />
                <Text
                  style={[styles.ml_10, styles.font_black, styles.fgBtnText]}>
                  Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', alignItems: 'center', marginTop: 50}}>
            <TextInput
              mode="outlined"
              value={email}
              onChangeText={text => {
                // checkValidEmail(text);
                setEmail(text);
              }}
              autoFocus={true}
              placeholder="Enter Your Email Here"
              activeOutlineColor={'#fa3b59'}
              textColor={'#000000'}
              outlineColor={'#d2d2d2'}
              style={{
                backgroundColor: '#ffffff',
                width: '90%',
                height: 35,
              }}
              right={
                <TextInput.Icon
                  style={{
                    marginTop: '50%',
                  }}
                  icon={({size, color}) => (
                    <Image
                      source={require('./media/check.png')}
                      style={{width: 15, height: 15, tintColor: '#d2d2d2'}}
                    />
                  )}
                />
              }
            />
            <TextInput
              mode="outlined"
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
              placeholder="Enter Your Password Here"
              secureTextEntry={isSecureTextEntry}
              textColor={'#000000'}
              activeOutlineColor={'#fa3b59'}
              outlineColor={'#d2d2d2'}
              style={{
                backgroundColor: '#ffffff',
                width: '90%',
                height: 35,
                marginTop: 10,
              }}
              right={
                <TextInput.Icon
                  style={{
                    marginTop: '50%',
                  }}
                  icon={({size, color}) => (
                    <TouchableWithoutFeedback
                      onPress={() => {
                        checkPasswordVisibility();
                      }}>
                      {isVisiblePassword ? (
                        <Image
                          source={require('./media/view.png')}
                          style={{
                            width: 15,
                            height: 15,
                            tintColor: '#fa3b59',
                          }}
                        />
                      ) : (
                        <Image
                          source={require('./media/invisible.png')}
                          style={{
                            width: 15,
                            height: 15,
                            tintColor: '#d2d2d2',
                          }}
                        />
                      )}
                    </TouchableWithoutFeedback>
                  )}
                />
              }
            />
          </View>
          <View style={{marginTop: 25, marginHorizontal: 20}}>
            <Button
              onPress={() => {
                handleLogin();
              }}
              uppercase={false}
              style={{backgroundColor: '#fa3b59', borderRadius: 5}}
              mode="contained"
              // loading={loadingBtn}
              textColor={'#ffffff'}>
              Login
            </Button>
          </View>

          <View style={{alignItems: 'center', marginTop: 20}}>
            {/* <Text style={[{color: '#fa3b59', fontFamily: 'poppins-Medium'}]}>
            Forgot password ?
          </Text> */}
            <Text
              variant="bodyMedium"
              style={[{color: '#fa3b59', fontFamily: 'poppins-Medium'}]}>
              Forgot password ?
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: '30%',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.replace('SignUp');
              }}>
              <Text
                style={{
                  color: '#fa3b59',
                }}>
                Dont have an account ? Join us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </>
  );
};

export default SignIn;
