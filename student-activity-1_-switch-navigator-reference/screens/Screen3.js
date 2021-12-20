import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements' 


export default class Screen5 extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    You're on your way towards greatness! Embrace positivity :) 
                </Text>
                <Screen3 color={this.props.navigation.getParam('color')}/> 
            </View>
        )
         
    }
} 