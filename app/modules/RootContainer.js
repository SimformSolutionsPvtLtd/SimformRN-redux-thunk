import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigation from '../navigation/AppNavigation';
import { ApplicationStyles } from '../theme';

const RootContainer = () => {
  return (
    <SafeAreaView style={ApplicationStyles.screen.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
    </SafeAreaView>
  );
};
// wraps dispatch to create nicer functions to call within our component

export default RootContainer;
