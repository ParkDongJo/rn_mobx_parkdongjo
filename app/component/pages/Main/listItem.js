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



class ListItem extends React.Component {
    constructor() {
        super();
    }

    renderFavoriteIcon = (item) => {
        let iconName = item.favorite ? 'ios-star': 'ios-star-outline';
        return <Icon name={iconName} size={20} color="#00ac3c"/>
    }

    render = () => {
        const item = this.props.item;

        return (
            <View style={styles.itemView}>
                <Text style={styles.descViewTxt}>{item.description}</Text>
                <Text style={styles.licenseNumTxt}>{item.licenseNumber}</Text>
                <View style={styles.capacityView}>
                    <TouchableOpacity style={styles.favoriteBtn} 
                                        onPress={() => { this.props.onFavorite(item) }}>

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