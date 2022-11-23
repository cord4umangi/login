import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bodyView: {
    flex: 1,
    // backgroundColor: '#f1ffff',
    marginHorizontal: 0,
  },
  LogoImgParent: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  LogoImg: {
    height: '100%',
    width: '35%',
    // backgroundColor: 'green',
  },
  headerTextParent: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  headerText: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 20,
  },
  headerTextSmall: {
    width: 300,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  mainBtnParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    marginTop: 45,
  },
  btnTouchable: {
    display: 'flex',
    backgroundColor: '#ffffff',
    // width: 170,
    width: '42%',
    alignItems: 'center',
    borderRadius: 5,
    // shadowColor: 'purple',
    elevation: 3,
  },
  btnParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    // justifyContent: 'space-evenly',
    height: 35,
  },
  buttonImg: {width: 13, height: 13},
  fgBtnText: {
    marginTop: 3,
  },
  ml_10: {
    marginLeft: 10,
  },
  font_black: {
    color: '#000000',
    fontSize: 13,
  },
});
