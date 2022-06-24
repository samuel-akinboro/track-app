import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import signupScreen from "./src/screens/signupScreen";
import SigninScreen from "./src/screens/SigninScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignUp: signupScreen,
    SignIn: SigninScreen
  }, { defaultNavigationOptions: { headerShown: false }}),
  mainFlow: createBottomTabNavigator({
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetails: TrackDetailsScreen
    })
  })
})

export default createAppContainer(switchNavigator)