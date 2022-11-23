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

const SignUp = ({navigation}) => {
  const [name, setName] = useState('New Admin');
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin');
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true);
    if (name && email && password) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) === false) {
        setIsLoading(false);
        alert('Invalid Email');
      } else {
        const userJson = {name: name, email: email, password: password};
        const userCred = JSON.stringify(userJson);
        try {
          const setRegAuth = await AsyncStorage.setItem('regAuth', userCred);
          setIsLoading(false);
          navigation.replace('SignIn');
        } catch (e) {
          // saving error
          setIsLoading(false);
          alert('e', e);
        }
        // alert(email);
        // alert(password);
      }
    } else {
      setIsLoading(false);
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
                  style={[styles.ml_10, styles.font_black, styles.fgBtnText]}>
                  Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', alignItems: 'center', marginTop: 50}}>
            <TextInput
              mode="outlined"
              value={name}
              onChangeText={text => {
                setName(text);
              }}
              placeholder="Enter Your Name Here"
              textColor={'#000000'}
              activeOutlineColor={'#fa3b59'}
              outlineColor={'#d2d2d2'}
              style={{
                backgroundColor: '#ffffff',
                width: '90%',
                height: 35,
              }}
            />
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
                marginTop: 10,
              }}
              //   right={
              //     <TextInput.Icon
              //       style={{
              //         marginTop: '50%',
              //       }}
              //       icon={({size, color}) => (
              //         <Image
              //           source={require('./media/check.png')}
              //           style={{width: 15, height: 15, tintColor: '#d2d2d2'}}
              //         />
              //       )}
              //     />
              //   }
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
                handleSignUp();
              }}
              uppercase={false}
              style={{backgroundColor: '#fa3b59', borderRadius: 5}}
              mode="contained"
              // loading={loadingBtn}
              textColor={'#ffffff'}>
              Join Us
            </Button>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: '35%',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.replace('SignIn');
              }}>
              <Text
                style={{
                  color: '#fa3b59',
                }}>
                Have an account ? Join us
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
      </ScrollView>
    </>
  );
};

export default SignUp;
