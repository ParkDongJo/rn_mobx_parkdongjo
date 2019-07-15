import React from "react";
import { 
  StatusBar, 
  SafeAreaView, 
  View,
  Animated,
  Easing,
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'mobx-react';

import Login from "./component/pages/Login";
import Main from "./component/pages/Main";
import Splash from "./component/common/Splash";
import RootStore from './stores';
import { TransitionConfiguration } from './global/config'


const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Main: Main,
    Splash: Splash,
  },
  {
    initialRouteName: "Splash",
    transitionConfig: TransitionConfiguration
  },
);

const AppContainer = createAppContainer(AppNavigator);
const rootStore = new RootStore();

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 0, backgroundColor: '#f5f5f5'}} />
        <Provider root={rootStore}>

          <View style={{flex:1}}>
            <StatusBar barStyle='dark-content' translucent={false} />

            <AppContainer />
          </View>
        </Provider>
      </View>
    )
  }
}