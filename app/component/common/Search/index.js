import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
import { observer, inject } from 'mobx-react';


class SearchView extends React.Component {

    constructor() {
      super();

      state = {
        text: '',
      };
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchView}>
            <TouchableOpacity style={styles.searchBtn}>
              <Icon name="ios-search" size={30}/>
            </TouchableOpacity>
            <TextInput
                  style={styles.input}
                  onChangeText={() => {}}
                  value={this.text}
                  placeholder = '차량 정보를 검색하세요'
                  autoCapitalize = 'none'
                  secureTextEntry={true}
                />
          </View>
        </View>
      );
    }
}

export default SearchView;
