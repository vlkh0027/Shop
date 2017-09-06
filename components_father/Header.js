import React,{Component} from 'React';
import {View,Text,TouchableOpacity,StyleSheet,Image, Dimensions,TextInput} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class Header extends Component{ 
    render(){
        const {wrapper,row1,textInput,title,icon} =styles;
        return(
            <View style={wrapper}>
               <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image style={icon}
                            source={require('./../image/menu.png')}
                            />
                    </TouchableOpacity>
                    <Text style={title}>Joker Gang</Text>
                    <Image style={icon}
                            source={require('./../image/clothes.png')}
                    />
                </View>
                <View style={{marginTop:-5}}>
                <TextInput style={textInput}
                placeholder="What do you want to buy?"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 25,
      height: 25,
    },
    wrapper:{
        height:height/7,
        padding:10,
        backgroundColor:'#24ffff',
        justifyContent:'space-between'
    },
    row1:{
        flexDirection:'row', justifyContent:'space-between'
    },
    textInput:{
        height:height/18,backgroundColor:'white'
    },
    title:{
        fontFamily:'Avenir', fontSize:20, marginBottom:5
    }
    
  });
