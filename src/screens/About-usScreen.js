import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

//Get a custom made component
import { LogoTitle } from './helpers/logoTitle';

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details",
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const {params} = this.props.navigation.state;
    const name = params ? params.name : null;
    const job = params ? params.job : null;
    const title = params ? params.title : null;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>Name: {JSON.stringify(name)}</Text>
        <Text>Occupation: {JSON.stringify(job)}</Text>
        <Button
          title="Go to Details... gain"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}