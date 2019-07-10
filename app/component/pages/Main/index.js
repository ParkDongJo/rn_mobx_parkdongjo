import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import styles from './styles';

import SearchView from '../../common/Search';
import ListView from '../../common/List';
import Footer from '../../common/Footer';


class Main extends React.Component {
    static navigationOptions = {
      title: 'Main Page',
      //Sets Header text of Status Bar
    };
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>

          </View>
          <View style={styles.content}>
            <Text>Main Screen</Text>
            <SearchView/>
            <ListView/>
          </View>
          <Footer></Footer>
        </View>
        
      );
    }
}

export default Main;
