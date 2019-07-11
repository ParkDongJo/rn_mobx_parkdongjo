import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { observer, inject } from 'mobx-react';


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
