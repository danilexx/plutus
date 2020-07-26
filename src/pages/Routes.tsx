import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './main';
import Receipt from './receipt';
import Banks from './banks';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Banks">
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Receipt" component={Receipt} />
      <Stack.Screen name="Banks" component={Banks} />
    </Stack.Navigator>
  );
};

export default Routes;
