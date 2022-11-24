import React, {useEffect, useState} from 'react';
// import LoginScreen from './src/login';
import DrawerNav from './src/drawerNavigation';
import SignIn from './src/signIn';
import SignUp from './src/signUp';
import Dashboard from './src/dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="DrawerNav">
            <Stack.Screen
              options={{headerShown: false}}
              name="DrawerNav"
              component={DrawerNav}
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
