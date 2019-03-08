import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Home extends Component<Props>{
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Home!</Text>
          </View>
        );
      }
}

const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#fff',
       justifyContent:"center",
       alignItems:'center'
    },
    welcome:{
        fontSize:20,
    }
})