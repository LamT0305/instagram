import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import Validator from 'email-validator';
import {firebase} from '../../../firebase';
import { db } from '../../../firebase';
const SignUpScreen = ({navigation}) => {
  const SignUpFormSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    username: yup.string().required().min(2),
    password: yup.string().required().min(8),
  });

  const onSignup = async(email, password, username) => {
    try{
      const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
      db.collection('users').add({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email
      })
      console.log('Firebase User Created successfully', email, password, username)
    }catch(error){
      Alert.alert(error.message)
    }
  }
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', username: '', password: ''}}
        onSubmit={(value) => {
          onSignup(value.email, value.password, value.username)
        }}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View style={styles.InputField}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#99f"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={styles.InputField}>
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor="#99f"
                autoCapitalize="none"
                keyboardType="default"
                autoFocus={true}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>
            <View style={styles.InputField}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#99f"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <View style={{width: '50%', marginVertical: 40}}>
              <Button title="Sign Up" onPress={handleSubmit} />
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Text style={{color:'#4da6ff'}}>Log In</Text>
                </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  InputField: {
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#FAFAFA',
    marginVertical: 5,
    width: '85%',
  },
});
export default SignUpScreen;
