import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from './about';
import Dashboard from './dashboard';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{headerShown: true}}
          name="Dashboard"
          component={Dashboard}
        />
        <Drawer.Screen
          options={{headerShown: true}}
          name="About"
          component={About}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNav;
