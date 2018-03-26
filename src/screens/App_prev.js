import React, { Component } from 'react';
import { ActivityIndicator, FlatList, ViewPagerAndroid, StyleSheet, Text, Button, TextInput, View, Image, ImageBackground } from 'react-native';

class Users extends Component{
  render(){
    var arr =[
        {name: 'Lucas', job: 'Developer'}, 
        {name: 'Shane O\`malley', job: 'Project Manager'},
        {name: 'Abdul Victor', job: 'Designer'}
      ];
    return(
        <Text> {this.props.name} is a {arr.job} </Text>
      );
  }
}

export default class TextChangeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    var fetch = () => {
      fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
              isLoading: false
            });
            return responseJson.movies;
          })
        .catch((error) => {
          console.error(error);
        });
    };

    /*componentDidMount() {
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.movies),
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }*/


    var onPressLearnMore = ()=>{ 
      alert('Are you sure?'+this.fetch());
      //fetch();
    };
    let img = {
      uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170329185317-nigeria-hungry-chowberry-app-exlarge-169.jpg'
    };
    return (
      <ImageBackground source={require('./images/bg1.jpg')} style={{flex: 1, padding:20}}>
        
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', height: 100, marginTop: 40 }}>
          <Image source={require('./images/logo.png')}/>
        </View>
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <Text style={{color: 'white', lineHeight: 40, textAlign: 'center', fontSize: 25}}> Login </Text>
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
        <View style={styles.container}>
          <FlatList
            data= {fetch}
            //renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        {/*<ViewPagerAndroid 
        style={styles.viewPager}
        initialPage={0}>
          <View style={styles.pageStyle} key="1">
            <Text>First page</Text>
          </View>
          <View style={styles.pageStyle} key="2">
            <Text>Second page</Text>
          </View>
          <View style={styles.pageStyle} key="3">
            <Text>Third page</Text>
          </View>
          <View style={{marginTop:10, alignItems: 'center'}} key="4">
          <Text style={{color:'#ccc'}}>Forget Password?</Text>
          <Text style={{fontSize: 50, color: '#fff', marginTop:20}}>
            (c) Copyright 2018, Lorem ipsum serum gitmd, serum manuern himeru hean 
          </Text>
        </View>
      </ViewPagerAndroid>*/}        
      </ImageBackground>
      
    );
  }
}

/*
Initial component

export default class App extends React.Component {
  render() {
    let img = {
      uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170329185317-nigeria-hungry-chowberry-app-exlarge-169.jpg'
    };
    return (
      <Image source={img} style={{width: 400, height: 420}}/>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
*/

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
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
});
