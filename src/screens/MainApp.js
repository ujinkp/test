import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import LoginScreen from './login-screen/index'; 

const MainApp = () => {
  return (
    <>
      <SafeAreaView />
      <LoginScreen/>
    </>
  );
};
export default MainApp;
