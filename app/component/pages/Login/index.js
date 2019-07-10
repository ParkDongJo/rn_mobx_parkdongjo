import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import styles from './styles';


class Login extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>

          </View>
          <View style={styles.content}>
            <Text>Login Screen</Text>
            <Button
              title="Go to Main"
              onPress={() => this.props.navigation.navigate('Main')}
            />
          </View>
          <View style={styles.bottom}>
            
          </View>
        </View>
      );
    }
}

export default Login;
