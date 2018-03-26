import React from 'react';
import { StyleSheet, Button, View, Image, Text, ScrollView, ListView, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

//Get a custom made component
import { LogoTitle } from './helpers/logoTitle';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  /*static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
  };*/
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
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
  }


  render() {
     if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    let loadImage = null;
    return (
      <View style={styles.container}>
       <ScrollView>
        <View style={styles.topContainer}>
          <Image source={require('../images/mobile-bg.jpg')} style={styles.mainBanner}/>
          {/*<Ionicons name={iosmenu} size={25} />*/}
          <Text>The Banners Goes here</Text>
        </View>
        
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.title}>New Products</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.ProductSec}><Text>Product1</Text></View>
            <View style={styles.ProductSec}><Text>Product2</Text></View>
            <View style={styles.ProductSec}><Text>Product3</Text></View>
            <View style={styles.ProductSec}><Text>Product4</Text></View>
          </ScrollView>
        </View>
        <View style={{flex: 1, paddingTop: 20}}>
          <View><Text style={styles.title}>Bestselling Products</Text></View>
          <ListView
            horizontal={true}
            style={styles.bottomContainer}
            dataSource={this.state.dataSource}
            renderRow={
              (rowData) => <View style={styles.ProductSec}><Text style={styles.whiteTitle}>{rowData.title}, {rowData.releaseYear}</Text></View>}
          />
        </View>
        {/*<View style={styles.bottomContainer}>
          <View><Text style={styles.title}>Bestselling Products</Text></View>
          <ScrollView horizontal={true}>
            <View style={styles.ProductSec}><Text>Product1</Text></View>
            <View style={styles.ProductSec}><Text>Product2</Text></View>
            <View style={styles.ProductSec}><Text>Product3</Text></View>
            <View style={styles.ProductSec}><Text>Product4</Text></View>
          </ScrollView>
        </View>*/}
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  topContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    marginBottom: 25
  },
  ProductSec: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 8,
    marginLeft: 8,
    width: 150,
    height: 160
  },
  title: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 10,
    paddingLeft: 8
  },
  whiteTitle: {
    color: '#fff000',
  },
  mainBanner: {
    height: 250
  }
});