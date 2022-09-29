import {View, Text, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '../../../firebase';
import {TextInput} from 'react-native-gesture-handler';
import * as yup from 'yup';
import {Formik} from 'formik';
import Validator from 'email-validator';
const LoginForm = ({navigation}) => {
  const LoginFormSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    password: yup
      .string()
      .required()
      .min(8, 'Your password have to has at least 8 characters'),
  });

  const onLogin = async(email, password) => {
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("Firebase Longin Successful", email, password)
    }catch(error){
      Alert.alert(error.message)
    }
  }

  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => {
          onLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View style={styles.wrapper}>
              <View style={styles.InputField}>
                <TextInput
                  placeholder="Input your phonenumber, username or email"
                  placeholderTextColor="#444"
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
                  placeholder="Password"
                  placeholderTextColor="#444"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
            </View>

            <View style={{width: '90%', marginBottom: 20}}>
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity activeOpacity={0.6}>
                  <Text style={{color: '#6BB0F5'}}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{width: '50%'}}>
                <Button title="Log in" onPress={handleSubmit} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 40,
                justifyContent: 'center',
              }}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={()=>{navigation.push('SignUpScreen')}}>
                <Text style={{color: '#6BB0F5'}}>Sign up</Text>
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
export default LoginForm;
