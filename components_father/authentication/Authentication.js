import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet,Dimensions,TextInput} from 'react-native';
import register from './../../api/register';
import SignIn from './SignIn';
import SignUp from './SignUp';
var {height, width} = Dimensions.get('window');
export default class Authentication extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      isSignIn:true,
    }
  }

  // componentDidMount(){
  //   register('nhatlinh@gmail.com','linh','123')
  //   .then(res => console.log(res));
  // }

  signIn(){
    this.setState ({
      isSignIn: true,
    })
  };

  signUp(){
    this.setState ({
      isSignIn: false,
    })
  };

    render(){

      const {wrapper,row1,title,icon,giua,duoi,container, signIn, signUp, inactiveStyle, activeStyle, input, bigButton, bigButtonText} = styles;

      const signInJSX = (
       <SignIn/>
      );

      const signUpJSX = (
      <SignUp/>
      );

      const {isSignIn} = this.state;
      const mainJSX = isSignIn ? signInJSX : signUpJSX;

      return(
        <View style={container}>
          <View style={wrapper}>
            <View style={row1}>
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                <Image style={icon}
                      source={require('./../../image/back.png')}
                      />
              </TouchableOpacity>
              <Text style={title}>Joker Gang User</Text>
              <Image style={icon}
                      source={require('./../../image/clothes.png')}
              />
            </View>             
          </View>
            {mainJSX}
          <View style={duoi}>
            <TouchableOpacity style={signIn} onPress={()=>{this.signIn()}}>
              <Text style={isSignIn ? inactiveStyle : activeStyle}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={signUp} onPress={()=>{this.signUp()}}>
              <Text style={!isSignIn ? inactiveStyle : activeStyle}>SIGN UP</Text>
            </TouchableOpacity>
          </View>                 
        </View>
         
        );
    }
}
const styles = StyleSheet.create({
  container:{
    justifyContent:'space-between',
    flex:1,
    backgroundColor:'gray',
  },
  icon: {
    width: 30,
    height: 30,
  },
  wrapper:{
      height:height/10,
      padding:20,
      paddingLeft:width/30,
      paddingRight:width/20,
      backgroundColor:'#24ffff',
      //justifyContent:'space-between'
  },
  row1:{
      flexDirection:'row', justifyContent:'space-between'
  },
  title:{
      fontFamily:'Avenir', fontSize:20, marginBottom:5
  },
  giua:{
    padding:10,
   
  },
  duoi:{
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  signIn:{
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    paddingVertical:15,
    alignItems:'center',
    justifyContent:'center',
    width:width/3,
    backgroundColor:'#24ffff',
    marginRight:2,
  },
  signUp:{
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    paddingVertical:15,
    alignItems:'center',
    justifyContent:'center',
    width:width/3,
    backgroundColor:'#24ffff',
    marginLeft:2,
  },
  inactiveStyle:{
    color:'white',
  },
  activeStyle:{
    color:'black',
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

