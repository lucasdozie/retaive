import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

//Get a custom made component
import RootStack from './root';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}