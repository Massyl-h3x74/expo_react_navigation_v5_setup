import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PhoneRegisterScreen from '../screens/PhoneRegisterScreen';
import PhoneVerifyScreen from '../screens/PhoneVerifyScreen';
import EmailPasswordScreen from '../screens/EmailPasswordScreen';
import CompleteProfileScreen from '../screens/CompleteProfileScreen';
import AddBankAccountScreen from '../screens/AddBankAccountScreen';
import CreateSecurityCodeScreen from '../screens/CreateSecurityCodeScreen';


const RegisterStack = createStackNavigator();

const RegisterNavigator = () => (   
    <RegisterStack.Navigator initialRouteName="PhoneRegister" headerMode="none">
        <RegisterStack.Screen name="PhoneRegister" component={PhoneRegisterScreen} />
        <RegisterStack.Screen name="PhoneVerify" component={PhoneVerifyScreen} />
        <RegisterStack.Screen name="EmailPasswordRegister" component={EmailPasswordScreen} />
        <RegisterStack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
        <RegisterStack.Screen name="AddBankAccount" component={AddBankAccountScreen} />
        <RegisterStack.Screen name="SecurityCode" component={CreateSecurityCodeScreen} />
    </RegisterStack.Navigator>
  );

export default RegisterNavigator