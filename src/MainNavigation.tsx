import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListOfHeadlinesScreen from '@/modules/ListOfHeadlinesScreen/ListOfHeadlinesScreen';
import {ScreensEnum} from './types/ScreenEnum';

const Stack = createNativeStackNavigator();

export function AppNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        testID="Lista das Principais Notícias"
        name={ScreensEnum.ListOfHeadlinesScreen}
        component={ListOfHeadlinesScreen}
      />
    </Stack.Navigator>
  );
}

export default function MainNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
