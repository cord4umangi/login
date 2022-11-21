import React, {useState, useEffect} from 'react';
import styles from './css/loginSignup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('kumar123@gmail.com');
  const [password, setPassword] = useState('kumar123');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isDisplayInvalidPassword, setIsDisplayInvalidPassword] =
    useState(false);
  const handleLogin = async () => {
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
          navigation.navigate('Dashboard');
        } catch (e) {
          // saving error
          alert('e', e);
        }
        // alert(email);
        // alert(password);
      } else {
        alert('invalid user credentials');
      }
    } else {
      alert('you are not registered');
    }
  };
  const checkValidEmail = text => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      setEmail(text);
      // alert(text);
      // alert('Email is Not Correct');
      return false;
    } else {
      setEmail(text);
      // alert('Email is Correct');
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
      <View style={styles.bodyView}>
        {/* <Text style={styles.text}>Login</Text> */}
        <View>
          <View style={styles.LogoImgParent}>
            <Image
              style={styles.LogoImg}
              resizeMode="center"
              source={require('./media/logo-light.png')}
            />
          </View>
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
                style={[
                  styles.ml_10,
                  styles.font_poppins,

                  styles.font_black,
                  styles.fgBtnText,
                ]}>
                Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.mainInputParent}>
          <View style={styles.inputParent}>
            <TextInput
              value={email}
              onChangeText={text => {
                checkValidEmail(text);
                // setEmail(text);
              }}
              autoFocus={true}
              placeholder="Enter Your Email Here"
              style={[styles.font_poppins, styles.inputText]}
              // underlineColorAndroid="transparent"
            />
            <Image
              source={require('./media/check.png')}
              style={[styles.inputImage, styles.right_30]}
            />
          </View>
          <View>{/* <Text style={{color: 'red'}}>Invalid Email</Text> */}</View>
          <View style={styles.inputParent}>
            <TextInput
              value={password}
              onChangeText={text => {
                setPassword(text);
              }}
              secureTextEntry={isSecureTextEntry}
              style={[
                styles.font_poppins,
                styles.inputText,
                {
                  letterSpacing: 5,
                },
              ]}
              placeholder="Enter Your Password"
              // underlineColorAndroid="transparent"
            />
            <TouchableWithoutFeedback
              onPress={() => {
                checkPasswordVisibility();
              }}>
              {isVisiblePassword ? (
                <Image
                  source={require('./media/view.png')}
                  style={[styles.inputImage, styles.right_30]}
                />
              ) : (
                <Image
                  source={require('./media/invisible.png')}
                  style={[styles.inputImage, styles.right_30]}
                />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.loginBtn}>
          <TouchableOpacity
            disabled={email && password ? false : true}
            style={[
              styles.loginBtnTouchable,
              {backgroundColor: `${email && password ? '#fa3b59' : '#ffb9c4'}`},
            ]}
            onPress={() => {
              handleLogin();
            }}>
            <Text
              style={[
                styles.font_poppins,
                styles.font_bold,
                {color: '#fff', letterSpacing: 1},
              ]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBtn}>
          <Text style={[{color: '#fa3b59', fontFamily: 'poppins-Medium'}]}>
            Forgot password ?
          </Text>
        </View>
        <View
          style={[
            styles.loginBtn,
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 30,
              // backgroundColor: 'red',
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text
              style={[
                {
                  color: '#fa3b59',
                  fontFamily: 'poppins-Medium',
                },
              ]}>
              Dont have an account ? Join us
            </Text>
          </TouchableOpacity>
        </View>
        {/* onPress={() => navigation.navigate('SignUp')} */}
      </View>
    </>
  );
};

export default LoginScreen;
