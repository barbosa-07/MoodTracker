import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { History } from './History.screen';
import { Analytics } from './Analytics.navigator';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="History" component={History} />
      <BottomTab.Screen name="Analytics" component={Analytics} />
    </BottomTab.Navigator>
  );
};
