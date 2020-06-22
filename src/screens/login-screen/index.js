import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
} from 'react-native';

const Login = () => {
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');

  const handleSubmitPress = () => {
    alert('ALERT');
  };

  return (
    <View style={styles.mainBody}>
      <View style={{marginTop: 100}}>
        <KeyboardAvoidingView enabled>
          <Text>LoginScreen</Text>
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
          <Button
            style={styles.loginButton}
            title="login"
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
    flex: 1,
  },
});

export default Login;
