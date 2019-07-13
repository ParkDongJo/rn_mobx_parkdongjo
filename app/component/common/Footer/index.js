import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../Footer/styles';

class Footer extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.menuBtn} 
                            onPress={()=> {}}>
              <Icon name="ios-menu" size={30}/>
          </TouchableOpacity>
          
        </View>
      );
    }
}

export default Footer;
