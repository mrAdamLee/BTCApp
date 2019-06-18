import React, {Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ReProblem from './Components/ReProblem';
import Home from './Components/Home';
import { createAppContainer, createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator({
  Home: Home,
  ReProblem: ReProblem,
})
const App = createAppContainer(RootStack);

export default App;