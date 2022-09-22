import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import NewPostScreen from './Screen/NewPostScreen';
const Stack = createStackNavigator();
const ScreenOption = {
    headerShow: false
}
const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={ScreenOption}
    >
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='NewPostScreen' component={NewPostScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
