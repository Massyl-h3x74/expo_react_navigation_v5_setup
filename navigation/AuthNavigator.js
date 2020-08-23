import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterNavigator from './RegisterNavigator';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
    <AuthStack.Navigator initialRouteName="Welcome" headerMode="none">
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterNavigator} />
    </AuthStack.Navigator>
);

export default AuthNavigator