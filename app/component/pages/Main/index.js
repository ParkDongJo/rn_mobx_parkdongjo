import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';
import styles from './styles';

import SearchView from '../../common/Search';
import ListItem from './listItem';
import Footer from '../../common/Footer';

import { observer, inject } from 'mobx-react';


@inject(stores => ({
    trucksStore: stores.root.trucksStore
  })
)
@observer
class Main extends React.Component {
    static navigationOptions = {
      title: 'Main Page',
      header: null,
      headerLeft: null
    };
  
    constructor() {
      super();
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <SearchView/>
          </View>
          <View style={styles.content}>
            <FlatList
                  style={{padding: 10}}
                  data={this.props.trucksStore.list}  
                  renderItem={({item}) => (
                    <ListItem
                      item={item}
                      onPress={() => {}} 
                    />
                  )}
              />  
          </View>
          <Footer />
        </View>
        
      );
    }
}

export default Main;
