import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import styles from './styles';
import { observer, inject } from 'mobx-react';



@inject(stores => ({
    authStore: stores.root.authStore
  })
)
class Splash extends React.Component {

    static navigationOptions = {
        header: null,
        headerLeft: null
      };

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();

        // this.props.authStore.logout();
    
        if (data !== null) {
            let auth = await AsyncStorage.getItem('auth')

            if (!!auth) {
                this.excuteAutoLogin(JSON.parse(auth));
            } else {
                this.props.navigation.navigate('Login');
            }
        }
    }

    performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            1000
          )
        )
    }

    excuteAutoLogin = async (auth) => {
        const { authStore, navigation } = this.props;
        
        authStore.setId(auth.id);
        authStore.setPwd(auth.pwd);
        
        let resp = await authStore.login();

        if (resp.success) {
          navigation.navigate('Main');

        } else {
          Alert.alert('ERROR - ', resp.errMsg);
          this.props.navigation.navigate('Login');
        }
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>
            RN Developer Park.DJ
          </Text>
        </View>
      );
    }
}

export default Splash;