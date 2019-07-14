import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Alert
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

      this.state = {
        list: []
      }
    }

    async componentDidMount() {
      const store = this.props.trucksStore;

      let resp = await store.fetchTruckList();
      if (resp.success) {
        this.setState({'list': resp.data});
      } else {
        Alert.alert('ERROR - ', resp.errMsg);
      }
    }

    onClickSeachBtn = (value) => {
      let list = this.props.trucksStore.seachTruck(value);
      this.setState({'list':list});
    }

    render = () => {
      const { trucksStore } = this.props;

      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <SearchView onSearch={this.onClickSeachBtn.bind(this)}/>
          </View>
          <View style={styles.content}>
            <FlatList
                  style={{padding: 10}}
                  data={this.state.list}  
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
