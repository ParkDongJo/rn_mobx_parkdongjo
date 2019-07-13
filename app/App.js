import React from "react";
import { StatusBar, SafeAreaView, } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'mobx-react';

import Login from "./component/pages/Login";
import Main from "./component/pages/Main";
import RootStore from './stores';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Main: Main,
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);
const rootStore = new RootStore();

export default class App extends React.Component {
  render() {

    return (
      <Provider root={rootStore}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="dark-content" translucent = {true} />

          <AppContainer />
        </SafeAreaView>
      </Provider>
    )
  }
}