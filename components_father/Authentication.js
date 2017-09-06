import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';

export default class Authentication extends Component{

    render(){
        return(
        <View>
          <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
            <Text>Go Back To Home</Text>
          </TouchableOpacity>                         
        </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
