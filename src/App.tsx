import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabNavigator } from './screens/BottomTab.navigator';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
