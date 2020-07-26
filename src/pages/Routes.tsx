import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './main';
import Receipt from './receipt';
import Banks from './banks';
import Preferences from './preferences';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import Profile from './profile';
import Calendar from './calendar';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main">
        {() => (
          <Tabs.Navigator
            tabBar={TabBar}
            tabBarOptions={{
              style: {
                position: 'absolute',
              },
            }}
            initialRouteName="Preferences">
            <Tabs.Screen name="Home" component={Main} />
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="Calendar" component={Calendar} />
          </Tabs.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name="Receipt" component={Receipt} />
      <Stack.Screen name="Banks" component={Banks} />
      <Stack.Screen name="Preferences" component={Preferences} />
    </Stack.Navigator>
  );
};

export default Routes;
