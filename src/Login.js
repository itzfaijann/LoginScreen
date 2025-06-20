import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import userData from '../src/data/user';
import fontSize, { moderateScale } from './utils/metrix';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const isValidEmail = email => /\S+@\S+\.\S+/.test(email);

  const handleLogin = () => {
    if (!email || !password) {
      return Alert.alert('Error', 'All fields are required.');
    }

    if (!isValidEmail(email)) {
      return Alert.alert(
        'Invalid Email',
        'Please enter a valid email address.',
      );
    }

    if (email === userData.email && password === userData.password) {
      Alert.alert('Success', `Welcome ${email}!`);
    } else {
      Alert.alert('Failed', 'Incorrect email or password.');
    }
  };

  return (
    <View style={styles.form}>
      <Image style={styles.logo} source={require('./logo/logo.png')} />

      <Text style={styles.title}>Log In Now</Text>
      <Text style={styles.subtitle}>
        Please login to continue using this
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={secure}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.noAccountText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: moderateScale(200),
    height: moderateScale(200),
    marginBottom: moderateScale(50),
    marginTop: moderateScale(-50),
  },
  title: {
    fontSize: fontSize(26),
    fontWeight: '800',
    marginBottom: moderateScale(30),
    color: '#2852B8',
  },
  subtitle: {
    fontSize: fontSize(15),
    color: '#666666',
    marginTop: moderateScale(-30),
    marginBottom: moderateScale(10),
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: moderateScale(8),
    padding: moderateScale(12),
    marginBottom: moderateScale(15),
    backgroundColor: '#fff',
    fontSize: fontSize(15),
  },
  button: {
    backgroundColor: '#2852B8',
    padding: moderateScale(14),
    borderRadius: moderateScale(8),
    width: '90%',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: fontSize(17),
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(15),
  },
  link: {
    marginLeft: moderateScale(232),
    marginTop: moderateScale(-5),
  },
  linkText: {
    color: '#666666',
    fontSize: fontSize(14),
  },
  noAccountText: {
    fontWeight: '500',
    fontSize: fontSize(14),
  },
  signUpText: {
    color: '#2852B8',
    fontWeight: '800',
    fontSize: fontSize(14),
  },
});
