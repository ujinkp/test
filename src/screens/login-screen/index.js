import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { Routes } from '../../navigation/Routes';
import {w} from '../../utils/Layout';

import CustomButton from '../../components/Button';

const data = { email: "1", password: "2" }

const Login = ({navigation, props}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmitPress = () => {
    if (userEmail !== data.email || userPassword !== data.password) {
      alert('INVALID DATA');
    } else {
      navigation.navigate(Routes.Tabs)
      // alert('LOGIN');//SWITCH ON TODO SCREEN
    }
  };

  return (
    <View style={styles.mainBody}>
      <View style={{marginTop: 100}}>
        <KeyboardAvoidingView enabled>
          <TextInput
            onChangeText={UserEmail => setUserEmail(UserEmail)}
            style={styles.input}
            placeholder="Enter Email"
          />

          <TextInput
            onChangeText={UserPassword => setUserPassword(UserPassword)}
            style={styles.input}
            placeholder="Enter Password"
          />

          <CustomButton 
            title="Login"
            style={styles.loginButton}
            onPress={handleSubmitPress}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
  input: {
    marginHorizontal: 15,
    padding: 15,
    borderWidth: 1,
  },
  loginButton: {
    alignItems: 'center',
    marginHorizontal: w(20)
  },
});

export default Login;
