import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';


class SearchView extends React.Component {

    constructor() {
      super();

      this.state = {
        text: '',
      };
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.searchView}>
            <TouchableOpacity style={styles.searchBtn}
                              onPress={() => { this.props.onSearch(this.state.text) }}>
              <Icon name="ios-search" size={20} color="#00bc45"/>
            </TouchableOpacity>
            <TextInput
                  style={styles.input}
                  onChangeText={(text) => {this.setState({text})}}
                  value={this.state.text}
                  placeholder = '차량 정보를 검색하세요'
                />
          </View>
        </View>
      );
    }
}

export default SearchView;
