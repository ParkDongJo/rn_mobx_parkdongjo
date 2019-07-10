import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

@inject(stores => ({
    trucks: stores.root.list
    })
)
@observer
class ListView extends React.Component {
    render() {
      return (
        <View>
          <Text>List View</Text>
          
        </View>
      );
    }
}

export default ListView;
