import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LoginForm from '../components/loginscreen/login/LoginForm';
const INSTAGRAM_LOGO =
  'https://img.icons8.com/fluency/100/000000/instagram-new.png';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <Image
          source={{uri: INSTAGRAM_LOGO}}
          style={{width: 100, height: 100, }}
        />
      </View>
      <LoginForm navigation={navigation}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  LogoContainer: {
    alignItems:'center',
    marginVertical:50,
  },
});
export default LoginScreen;
