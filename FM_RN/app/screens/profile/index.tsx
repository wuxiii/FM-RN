import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class Profile extends Component<Props>{
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Profile!</Text>
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