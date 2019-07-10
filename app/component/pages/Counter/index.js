import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';
import { observer, inject } from 'mobx-react';


@inject(stores => ({
    number: stores.root.counter.number,
    increase: stores.root.counter.increase,
    decrease: stores.root.counter.decrease
    })
)
@observer
class Counter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <View>
        <Text>Num : {number}</Text>
        <Button
            title="+1"
            onPress={increase}
          />
        <Button
            title="-1"
            onPress={decrease}
          />
      </View>
    );
  }
}

export default Counter;