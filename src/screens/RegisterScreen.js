import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, Image, ImageBackground } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'; // 1.0.0-beta.27

//Get a custom made component
import { LogoTitle } from './helpers/logoTitle';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: "Register",
    headerStyle: {
      backgroundColor: '#4267b2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    var onPressLearnMore = ()=>{ 
      alert('Are you certain?');
    };

    return (
      <View style={{ flex: 1, backgroundColor:'#8b8b8c' }}>
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', height: 100, marginTop: 40 }}>
          <Image source={require('../images/logo.png')}/>
        </View>
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>{/*
          <Text style={{color: 'white', lineHeight: 40, textAlign: 'center', fontSize: 25}}> Login </Text>*/}
          <TextInput
            style={{height: 50,lineHeight: 4, fontSize: 15, marginBottom: 20, color: 'white'}}
            placeholder="Enter Username"
          />
          <TextInput
            style={{height: 50,lineHeight: 4, fontSize: 15, marginBottom: 20, color: 'white'}}
            placeholder="Enter Email"
          />
          <TextInput
            style={{height: 50,lineHeight: 4, fontSize: 15, marginBottom: 20, color: 'white'}}
            placeholder="Enter Phone Number"
          />
          <TextInput
            style={{height: 50,lineHeight: 4, fontSize: 15, marginBottom: 20, color: 'white'}}
            placeholder="Enter Password"
          />
          <TextInput
            style={{height: 50,lineHeight: 4, fontSize: 15, marginBottom: 20, color: 'white'}}
            placeholder="Re-Enter Password"
          />
        </View>
        <View style={{flex:1, flexDirection: 'row', alignItems:'center', paddingRight:20, paddingLeft:20, marginBottom: 40}}>
          <Button
            onPress={onPressLearnMore}
            title="Register"
            color="#841584"
            //width="80"
            style={{flex:1, fontSize: 12, left: 0, marginRight: 5}}
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={onPressLearnMore}
            title="Login"
            color="#841500"
            //width="80"
            style={{flex:2, marginTop:5, display: 'none'}}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{marginTop:10, alignItems: 'center'}}>
          <Text style={{color:'#ccc'}}>Forget Password?</Text>
        </View>
      </View>
    );
  }
}