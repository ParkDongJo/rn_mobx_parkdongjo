import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';
import { observer, inject } from 'mobx-react';


@inject(stores => ({
    trucksStore: stores.root.trucksStore,
  })
)
class ListItem extends React.Component {
    constructor() {
        super();

        state = {
            reflesh: false
        }

        this.onClickFavorite = this.onClickFavorite.bind(this);
        this.renderFavoriteIcon = this.renderFavoriteIcon.bind(this);
    }

    onClickFavorite = async (item) => {
        let resp = await this.props.trucksStore.updateTruck({
                                    key:'favorite', 
                                    vehicleIdx: item.vehicleIdx});

        if (resp.success) {
            this.setState({'reflesh': !this.reflesh})
        } else {
            Alert.alert('ERROR - ', resp.errMsg);
        } 
    }

    renderFavoriteIcon = (item) => {
        let iconName = item.favorite ? 'ios-star': 'ios-star-outline';
        return <Icon name={iconName} size={20}/>
    }

    render = () => {
        const item = this.props.item;

        return (
            <View style={styles.itemView}>
                <Text style={styles.descViewTxt}>{item.description}</Text>
                <Text style={styles.licenseNumTxt}>{item.licenseNumber}</Text>
                <View style={styles.capacityView}>
                    <TouchableOpacity style={styles.favoriteBtn} 
                                        onPress={() => { this.onClickFavorite(item) }}>

                        { this.renderFavoriteIcon(item)}

                    </TouchableOpacity>
                    <Text style={styles.capacityTxt}>
                        쓰레기 종류 : 음식물 | 적재용량 : {item.capacity}t
                    </Text>
                </View>
            </View>
        )
    }
}

export default ListItem;