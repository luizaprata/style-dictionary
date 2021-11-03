import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigation from '@/MainNavigation';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar />
      <MainNavigation />
    </>
  );
}
