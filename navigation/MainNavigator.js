import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => (
    <MainStack.Navigator>
      <MainStack.Screen name="Main" component={MainScreen} />
    </MainStack.Navigator>
);

export default MainNavigator
