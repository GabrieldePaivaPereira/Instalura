import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Feed from './app/views/Feed/Feed.js'
import Login from './app/views/Login/Login.js'


const navigation = createStackNavigator({
  Login: { screen: Login},
  Feed: { screen: Feed}
});

const AppContainer = createAppContainer(navigation)

const App = () => {
  return(
    <AppContainer/>
  );
};

export default App;
