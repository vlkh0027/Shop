import React,{Component} from 'react';
import {Text, TextInput, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

export default class SignIn extends Component{
    state={
        
    }
    render(){
      const {giua, input, bigButton, bigButtonText} = styles;
        return(
            <View style={giua}>
            <TextInput
                style={input}
                placeholder="Enter UserName"
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
              />
              <TextInput
                style={input}
                placeholder="Enter Password"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
              <TouchableOpacity style={bigButton}>
                <Text style={bigButtonText}>SIGN IN NOW</Text>
              </TouchableOpacity>
          </View>
        );
    }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    giua:{
        padding:10,
       
      },
    input:{
        height:height/14,
        backgroundColor:'white',
        alignItems:'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:20,
        marginBottom:10,
        paddingLeft:30,
      },
      bigButton:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        backgroundColor:'#24ffff',
        padding:15,
        borderRadius:40,
      },
      bigButtonText:{
        fontFamily:'Avenir',
        fontWeight:'bold',
        color:'white',
        fontSize:15,
      },
});