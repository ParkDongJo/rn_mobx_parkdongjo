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
    trucksStore: stores.root.trucksStore,
  })
)
@observer
class Main extends React.Component {
    static navigationOptions = {
      header: null,
      headerLeft: null
    };
  
    constructor() {
      super();

      state = {
        reflesh: false
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

    onClickSeachBtn = async (value) => {
      await this.props.trucksStore.seachTruck(value);
      this.setState({'list':this.props.trucksStore.list});
    }

    onClickFavorite = async (item) => {
      const { trucksStore } = this.props;

      let resp = await trucksStore.updateTruck({
                                  key:'favorite', 
                                  vehicleIdx: item.vehicleIdx});

      if (resp.success) {
          this.setState({'reflesh': !this.reflesh})
      } else {
          Alert.alert('ERROR - ', resp.errMsg);
      } 
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
                  data={trucksStore.list}  
                  renderItem={({item}) => (
                    <ListItem item={item} onFavorite={this.onClickFavorite.bind(this)}/>
                  )}
                  keyExtractor={(item, index) => index.toString()}
              />  
          </View>
          <Footer />
        </View>
        
      );
    }
}

export default Main;
