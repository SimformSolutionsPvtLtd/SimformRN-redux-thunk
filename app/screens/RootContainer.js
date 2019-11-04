import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import ReduxNavigation from './ReduxNavigation';

// Styles

const RootContainer = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ReduxNavigation />
    </SafeAreaView>
  );
};
// wraps dispatch to create nicer functions to call within our component

export default RootContainer;
