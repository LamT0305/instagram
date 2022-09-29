import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import SignUpForm from './SignUpForm';
const INSTAGRAM_LOGO =
  'https://img.icons8.com/fluency/100/000000/instagram-new.png';
const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <Image
          source={{uri: INSTAGRAM_LOGO}}
          style={{width: 100, height: 100}}
        />
      </View>
      <SignUpForm navigation={navigation}/>
    </View>
  );
};
const styles = StyleSheet.create({
  LogoContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
});
export default SignUpScreen;
