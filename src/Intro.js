import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fontSize, { moderateScale } from './utils/metrix';

export default function Intro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('./logo/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome To</Text>
      <Text style={styles.subtitle}>
        Create an account and access thousand{'\n'}of cool stuffs
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <View style={styles.bottomText}>
        <Text style={styles.bottomTextLabel}>Do you have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.bottomTextLink}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: moderateScale(200),
    height: moderateScale(200),
    marginBottom: moderateScale(40),
    marginTop: moderateScale(-30),
  },
  title: {
    fontSize: fontSize(24),
    fontWeight: '700',
    color: '#2852B8',
    marginBottom: moderateScale(10),
  },
  subtitle: {
    textAlign: 'center',
    fontSize: fontSize(14),
    color: '#666666',
    marginBottom: moderateScale(40),
  },
  button: {
    backgroundColor: '#2852B8',
    borderRadius: moderateScale(30),
    marginBottom: moderateScale(20),
    width: "90%",
    height: moderateScale(60),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: fontSize(18),
    fontWeight: '600',

  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomTextLabel: {
    fontSize: fontSize(14),
    color: '#333',
  },
  bottomTextLink: {
    fontSize: fontSize(15),
    color: 'black',
    fontWeight: '800',
  },
});
