import React,{Component } from 'React';
import{Image, StyleSheet,View,Text,Dimensions,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

var {height, width} = Dimensions.get('window');
var imageWidth = width-40;
var imageHeight = height*0.35 - 45;
export default class Category extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {wrapper,image,text, textView, imageView} = styles;
        const {navigate} = this.props.navigation;
        return(
        <View style={wrapper}>   
            <View style={textView}> 
                 <Text style={text}>LIST OF CATEGORY</Text>
             </View>
                <View style={imageView}>
                    <Swiper showsButtons={true}>
                        <TouchableOpacity onPress = {()=>{navigate('Detail')}}>
                            <Image style={image} source={require('./../../../image/adidasColl.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=>{navigate('Detail')}}>
                            <Image style={image} source={require('./../../../image/nikeColl.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=>{navigate('Detail')}}>
                            <Image style={image} source={require('./../../../image/nikeLebronColl.png')}/>
                        </TouchableOpacity>
                    </Swiper>
                </View>       
        </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper:{
        height:height*0.35,
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
        flex:1,
        justifyContent:'center',
        alignItems:'center',
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