import React, {useState} from 'react';
import styles from './css/loginSignup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const handleSignUp = async () => {
    if (name && email && password) {
      const userJson = {name: name, email: email, password: password};
      const userCred = JSON.stringify(userJson);
      try {
        const setRegAuth = await AsyncStorage.setItem('regAuth', userCred);
        navigation.navigate('Login');
      } catch (e) {
        // saving error
        alert('e', e);
      }
      // alert(email);
      // alert(password);
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
          <Text style={styles.headerText}>Join us to start searching</Text>
          <Text style={styles.headerTextSmall}>
            Discover your perfect university
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
              value={name}
              onChangeText={text => {
                setName(text);
              }}
              autoFocus={true}
              placeholder="Name"
              style={[styles.font_poppins, styles.inputText]}
              // underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputParent}>
            <TextInput
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              placeholder="Email"
              style={[styles.font_poppins, styles.inputText]}
              // underlineColorAndroid="transparent"
            />
          </View>
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
                  letterSpacing: 0,
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
            disabled={name && email && password ? false : true}
            style={[
              styles.loginBtnTouchable,
              {
                backgroundColor: `${
                  name && email && password ? '#fa3b59' : '#ffb9c4'
                }`,
              },
            ]}
            onPress={() => {
              handleSignUp();
            }}>
            <Text
              style={[
                styles.font_poppins,
                styles.font_bold,
                {color: '#fff', letterSpacing: 1},
              ]}>
              Join Us
            </Text>
          </TouchableOpacity>
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
              navigation.navigate('Login');
            }}>
            <Text
              style={[
                {
                  color: '#fa3b59',
                  fontFamily: 'poppins-Medium',
                },
              ]}>
              Have an account ? Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
