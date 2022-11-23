import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loginBtn: {
    marginTop: 15,
    // display: 'flex',
    alignItems: 'center',

    // backgroundColor: 'red',
  },
  loginBtnTouchable: {
    display: 'flex',
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fa3b59',
    // backgroundColor: '#ffb9c4',
    width: 320,
    height: 38,
    borderRadius: 5,
    // shadowColor: 'green',
    // elevation: 3,
  },
  bodyView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  LogoImgParent: {
    height: 100,
    // width: 300,
    // backgroundColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoImg: {
    height: 40,
    // width: 320,
    // flex: 1,
  },
  headerTextParent: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#d1d1d1',
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
    paddingHorizontal: 35,
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
  font_poppins: {
    fontFamily: 'Poppins-Regular',
  },
  font_bold: {
    fontWeight: 'bold',
  },
  font_black: {
    color: '#000000',
    fontSize: 13,
  },
  mainInputParent: {
    display: 'flex',
    //  justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 23,
  },
  inputParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d1d1d1',
    borderWidth: 1,
    // width: 365,
    height: 40,
    borderRadius: 5,
    color: '#000000',
    marginTop: 13,
  },
  inputText: {
    paddingVertical: 0,
    paddingLeft: 10,
    marginTop: 3,
    width: 300,
    color: '#000000',
    // backgroundColor: 'red',
  },
  inputImage: {
    height: 18,
    width: 18,
    // position: 'absolute',
    // right: -20,
  },
  right_30: {
    right: -30,
  },
  TandCMainView: {
    // backgroundColor: '#d3d3d3',
    alignItems: 'center',
  },
  TAndCParent: {
    marginTop: 15,
    width: 360,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
  },
  inputCheckImage: {
    height: 13,
    width: 13,
    marginRight: 10,
  },
});
