import React, {Component} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from "react-native";






export default class HomeScreen extends Component {

    goToScreen1=(color)=> {
      this.props.navigation.navigate ('Screen1' , {color:color})
    }

    render() {
        return(
            <View style = {styles.container}>
              

              <TouchableOpacity
                style = {[styles.button,{backgroundColor:"red"}]}
                onPress={()=>this.goToScreen1("red")}> 
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity
            
                style = {[styles.button,{backgroundColor:"orange"}]}
                onPress={()=>this.goToScreen2("orange")}> 
                <Text style={styles.buttonText}>2</Text>

              </TouchableOpacity> 


              <TouchableOpacity
                style = {[styles.button,{backgroundColor:"yellow"}]}
                onPress={()=>this.goToScreen3("yellow")}> 
                <Text style={styles.buttonText}>3</Text>
            
              </TouchableOpacity> 
                
              <TouchableOpacity 
            
                style = {[styles.button,{backgroundColor:"chartreuse"}]}
                onPress={()=>this.goToScreen4("chartreuse")}> 
                <Text style={styles.buttonText}>4</Text>

              </TouchableOpacity> 

              <TouchableOpacity 
            
                style = {[styles.button,{backgroundColor:"green"}]}
                onPress={()=>this.goToScreen5("green")}> 
                <Text style={styles.buttonText}>5</Text>

              </TouchableOpacity> 
              


            </View>

        )
    }
}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 50,
    width : 50,
    height: 15,
  buttonText: {
    textAlign: 'center',
    color: 'black'
  }
  }
})