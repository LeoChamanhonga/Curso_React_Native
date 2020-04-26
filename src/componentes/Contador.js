/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native';

export default class Contador extends Component{
    render(){
        // eslint-disable-next-line prettier/prettier
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.props.numero}</Text>
            </View>
        )
    }
}