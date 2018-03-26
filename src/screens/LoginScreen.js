import React from 'react';
import { StyleSheet, Text, Button, TextInput, View, Image, ImageBackground } from 'react-native';

/*class Users extends Component{
  render(){
    var arr =[
        {name: 'Lucas', job: 'Developer'}, 
        {name: 'Shane O\`malley', job: 'Project Manager'},
        {name: 'Abdul Victor', job: 'Designer'}
      ];
    return(
        <Text> {this.props.name} is a {this.props.job} </Text>
      );
  }
}*/

export default class TextChangeApp extends React.Component {
  /*constructor(){
    super(props);
    this.state = {
      counter: 1
    };
  }*/



  render() {
    var onPressLearnMore = ()=>{ 
      alert('Are you certain counter:');
      //return x+2;
    };
    let img = {
      uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170329185317-nigeria-hungry-chowberry-app-exlarge-169.jpg'
    };
    return (
      <ImageBackground source={require('./images/bg1.jpg')} style={{flex: 1, padding:20}}>
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', height: 100, marginTop: 40 }}>
          <Image source={require('./images/logo.png')}/>
        </View>
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>{/*
          <Text style={{color: 'white', lineHeight: 40, textAlign: 'center', fontSize: 25}}> Login </Text>*/}
          <TextInput
            style={{height: 50,lineHeight: 4, fontSize: 15, marginBottom: 20, color: 'white'}}
            placeholder="Enter Username"
          />
          <TextInput
            style={{height: 50,lineHeight: 4, fontSize: 15, marginBottom: 20, color: 'white'}}
            placeholder="Enter Password"
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
          <Button
            onPress={onPressLearnMore}
            title="Administration"
            color="#841500"
            //width="80"
            style={{flex:3, marginTop:5, right:10, display: 'none'}}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{marginTop:10, alignItems: 'center'}}>
          <Text style={{color:'#ccc'}}>Forget Password?</Text>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#eae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
