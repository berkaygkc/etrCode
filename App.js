import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import ActivateScreen from './app/screens/ActivateScreen'
import Home from './app/screens/Home'

const AppNavigator =
  createSwitchNavigator(
    {
      Activate : { screen :  ActivateScreen },
      Home : { screen : Home },
    },
    {
      initialRouteName : 'Activate'
    }
  );

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
      <AppContainer />
    );
}
