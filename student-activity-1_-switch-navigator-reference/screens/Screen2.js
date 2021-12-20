import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements' 


export default class Screen5 extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    Life will get better for you! Always believe that.  
                </Text>
                <Screen2 color={this.props.navigation.getParam('color')}/> 
            </View>
        )
         
    }
} 