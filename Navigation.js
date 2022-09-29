import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen'
import NewPostScreen from './screen/NewPostScreen'
import LoginScreen from './screen/LoginScreen'
import SignUpScreen from './components/loginscreen/sign up/SignUpScreen'
const Stack = createStackNavigator();
const ScreenOption = {
    headerShown: false
}
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={ScreenOption}
    >
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
