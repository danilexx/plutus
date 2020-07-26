import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './main';
import Receipt from './receipt';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Receipt">
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Receipt" component={Receipt} />
    </Stack.Navigator>
  );
};

export default Routes;
