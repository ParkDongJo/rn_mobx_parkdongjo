import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Alert,
  SafeAreaView
} from 'react-native';
import styles from './styles';

import SearchView from '../../common/Search';
import ListItem from './listItem';
import Footer from '../../common/Footer';
import global from './../../../global/constants'

import { observer, inject } from 'mobx-react';


@inject(stores => ({
    /* state */
    trucks: stores.root.trucksStore.list,

    /* action or computed */
    fetchTruckList: stores.root.trucksStore.fetchTruckList,
    seachTruck: stores.root.trucksStore.seachTruck,
    updateTruck: stores.root.trucksStore.updateTruck
  })
)
@observer
class Main extends React.Component {
    static navigationOptions = {
      header: null,
      headerLeft: null
    };
  
    constructor(props) {
      super(props);
    }

    async componentDidMount() {
      const { fetchTruckList } = this.props;

      let resp = await fetchTruckList();
      if (!resp.success) {
        Alert.alert('ERROR - ', resp.errMsg);
      }
    }

    onClickSeachBtn = async (value) => {
      const { trucks, seachTruck } = this.props;

      await seachTruck(value);
    }

    onClickFavorite = async (item) => {
      const { updateTruck } = this.props;

      let resp = await updateTruck({
                            key:'favorite', 
                            vehicleIdx: item.vehicleIdx});

      if (!resp.success) {
          Alert.alert('ERROR - ', resp.errMsg);
      } 
    }

    render = () => {
      const { trucks } = this.props;

      return (
        <SafeAreaView style={{flex: 1, backgroundColor: global.COLOR.PRIMARY}}>
          <View style={styles.container}>
            <View style={styles.header}>
              <SearchView onSearch={this.onClickSeachBtn.bind(this)}/>
            </View>
            <View style={styles.content}>
              <FlatList
                    style={{paddingTop: 16}}
                    data={trucks}  
                    renderItem={({item}) => (
                      <ListItem item={item} onFavorite={this.onClickFavorite.bind(this)}/>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />  
            </View>
            <Footer />
          </View>
        </SafeAreaView>        
      );
    }
}

export default Main;
