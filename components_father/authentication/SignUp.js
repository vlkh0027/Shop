import React,{Component} from 'react';
import {Text, TextInput, View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import register from './../../api/register';

export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            rePassword:'',
            email:'',
        }
    }

    regisUser(){
        const{username,email,password,rePassword} = this.state;
        register(email,username,password)
        .then(res => {
            console.log(res);
        })
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
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <TextInput
            style={input}
            placeholder="Enter Re_Password"
            secureTextEntry
            onChangeText={(rePassword) => this.setState({rePassword})}
            value={this.state.rePassword}
          />
          <TextInput
            style={input}
            placeholder="Enter Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TouchableOpacity style={bigButton} onPress={()=>{this.regisUser()}}>
            <Text style={bigButtonText}>SIGN UP NOW</Text>
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