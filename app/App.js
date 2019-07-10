import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'mobx-react';

import Login from "./component/pages/Login";
import Main from "./component/pages/Main";
import Counter from "./component/pages/Counter";
import RootStore from './stores';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Main: Main,
    Counter: Counter,
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);
const rootStore = new RootStore();

export default class App extends React.Component {
  render() {
    console.log("rootStore = ",rootStore);
    return (
      <Provider root={rootStore}>
        <AppContainer />
      </Provider>
    )
  }
}