import React from 'react';
import {Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';

import AppNavigator from '../navigation/AppNavigator';

const MainApp = () => {
  return (
    <>
      <KeyboardAvoidingView 
          style={styles.mainBody}
          behavior={Platform.OS === "ios" ? "padding" : null}>
      <SafeAreaView style={styles.container} />
      {/* <LoginScreen/> */}
      <AppNavigator/>
      </KeyboardAvoidingView>
    </>
  );
};
export default MainApp;
