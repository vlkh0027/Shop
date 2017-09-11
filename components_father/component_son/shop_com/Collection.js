import React,{Component } from 'React';
import{Image, StyleSheet,View,Text,Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');
var imageWidth = width-40;
var imageHeight = height*0.35 - 45;
export default class Collection extends Component{
    render(){
        const {wrapper,image,text, textView, imageView} = styles;
        return(
            <View style={wrapper}>
                <View style={textView}> 
                    <Text style={text}>COLLECTION</Text>
                </View>
                <View style={imageView}>
                    <Image style={image} source={require('./../../../image/nikeColl.png')}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper:{
        //height:height*0.35,
        width:width-20,
        margin:10,
        backgroundColor:'#b3b3b3',
        padding:10,
        justifyContent:'center',
        shadowColor:'#404040',
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        paddingTop:0,

    },
    textView:{
        height:40,
        justifyContent:'center',
    },
    image:{
        width:imageWidth,
        height:imageHeight,
    },
    imageView:{
        flex:4
    },
    text:{
        fontSize:20,

    }
  });