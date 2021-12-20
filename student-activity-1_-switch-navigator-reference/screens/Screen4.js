import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements' 




export default class Screen5 extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>
                    You have potential to be amazing! Keep up the good work! 
                </Text>
                <Screen4 color={this.props.navigation.getParam('color')}/> 
            </View>
        )
         
    }
} 
