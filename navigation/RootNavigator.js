import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const RootStack = createStackNavigator();

const RootNavigator = ({ userToken }) => (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen name="Main" component={MainNavigator} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );

export default RootNavigator