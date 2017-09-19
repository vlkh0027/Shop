import React,{Component } from 'React';
import{Image, StyleSheet,View,Text,Dimensions,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

var {height, width} = Dimensions.get('window');
var imageWidth = width-40;
var imageHeight = height*0.35 - 45;
const url ="http://localhost/api/images/type/";
export default class Category extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //const {types} = this.props;
        const {wrapper,image,text, textView, imageView} = styles;
        const {navigate} = this.props.navigation;
        return(
        <View style={wrapper}>   
            <View style={textView}> 
                 <Text style={text}>List category</Text>
             </View>
                <View style={imageView}>
                    <Swiper showsButtons={true} autoplay={true} loop={true}
                    showsPagination width={imageWidth} height={imageHeight}> 
                        {this.props.screenProps.map(e=> (
                            <TouchableOpacity onPress = {()=>{navigate('ListProducts')}} key= {e.id} >
                                <Image style={image} source={{uri:`${url}${e.image}`}} />
                            </TouchableOpacity>
                        ))}
                        
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
        //height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:imageWidth,
        height:imageHeight,
    },
    imageView:{
        flex:4,
        //justifyContent:'flex-end',
        
    },
    text:{
        fontSize:20,
    }
  });