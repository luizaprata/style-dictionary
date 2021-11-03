import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListOfHeadlinesScreen from '@/modules/ListOfHeadlinesScreen/ListOfHeadlinesScreen';
import { ScreensEnum } from './types/ScreenEnum';

const Stack = createStackNavigator();

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
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
