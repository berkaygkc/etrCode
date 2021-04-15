import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import ActivateScreen from './app/screens/ActivateScreen'
import Home from './app/screens/Home'

const AppNavigator =
  createAnimatedSwitchNavigator(
    {
      Activate : { screen :  ActivateScreen },
      Home : { screen : Home },
    },
    {
      initialRouteName : 'Activate'
    },
    {
      transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
      ),
    }
  );

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
      <AppContainer />
    );
}
