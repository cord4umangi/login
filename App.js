import React, {useEffect, useState} from 'react';
// import LoginScreen from './src/login';
import SignIn from './src/signIn';
import SignUp from './src/signUp';
// import Register from './src/register';
import Dashboard from './src/dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = async () => {
    const getAuth = await AsyncStorage.getItem('auth');
    if (getAuth) {
      setIsAuth(true);
    }
  };

  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
              options={{headerShown: false}}
              name="Dashboard"
              component={Dashboard}
            />

            <Stack.Screen
              options={{headerShown: false}}
              name="SignIn"
              component={SignIn}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="SignUp"
              component={SignUp}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
