import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';



class ListItem extends React.Component {
    constructor() {
        super();
    }

    render = () => {
        const item = this.props.item;
        return (
            <View style={styles.itemView}>
                <Text style={styles.descViewTxt}>{item.description}</Text>
                <Text style={styles.licenseNumTxt}>{item.licenseNumber}</Text>
                <View style={styles.capacityView}>
                    <TouchableOpacity style={styles.favoriteBtn} 
                                        onPress={()=> {}}>
                        <Icon name="ios-star-outline" size={20}/>
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