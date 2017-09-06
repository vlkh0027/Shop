import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';

export default class HistoryOder extends Component{

    render(){
        return(
            <View style={{flex:1, backgroundColor:'blue'}}>  
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