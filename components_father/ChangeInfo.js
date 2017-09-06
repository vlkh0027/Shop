import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';


export default class ChangeInfo extends Component{

    render(){
        return(
            <View style={{flex:1, backgroundColor:'red'}}> 
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