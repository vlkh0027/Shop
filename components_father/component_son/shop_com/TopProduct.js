import React,{Component} from 'react';
import {Image, StyleSheet,View,Text,Dimensions, TouchableOpacity} from 'react-native';

export default class TopProduct extends Component{

    gotoDetail(){
        const {navigate} = this.props.navigation;
        navigate('Detail');
    }

    render(){
        const {container, titleContainer, title, body, image, productContainer,textPrice, textName} = styles;
        return(           
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                    {this.props.screenProps.map(e=> (
                        
                        <Text key={e.id}>{e.name}</Text>
                        ))}
                    
                </View>
                <View style={body}>
                    <TouchableOpacity 
                    onPress={()=>{this.gotoDetail()}}
                    style ={productContainer}>
                        <Image style={image} source={require('./../../../image/hoddie2.png')}/>
                        <Text style={textName}>Name</Text>
                        <Text style={textPrice}>35$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{this.gotoDetail()}}
                    tyle ={productContainer}>
                        <Image style={image} source={require('./../../../image/aothun1.png')}/>
                        <Text style={textName}>Name</Text>
                        <Text style={textPrice}>40$</Text>
                    </TouchableOpacity>
                    <View style={{height:10,width}}/>
                    <TouchableOpacity 
                    onPress={()=>{this.gotoDetail()}}
                    style ={productContainer}>
                        <Image style={image} source={require('./../../../image/aothun2.png')}/>
                        <Text style={textName}>Name</Text>
                        <Text style={textPrice}>35$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>{this.gotoDetail()}}
                    style ={productContainer}>
                        <Image style={image} source={require('./../../../image/hoddie3.png')}/>
                        <Text style={textName}>Name</Text>
                        <Text style={textPrice}>40$</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
var {height, width} = Dimensions.get('window');
var imageWidth = (width/2)-30;
var imageHeight = height*0.3 - 20 ;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#d9d9d9',
        margin:10,
        shadowColor:'#404040',        
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        
    },
    titleContainer:{
        height:40,
        justifyContent:'center',
        paddingLeft:10,
        
    },
    title:{
        fontSize:20,
    },
    body:{
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
        paddingBottom:10,
        
    },
    productContainer:{
        width:imageWidth,
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        paddingBottom:5,
        
    },
    image:{
        height:imageHeight,
        width:imageWidth,
    },
    textPrice:{
        paddingLeft:10,
        fontFamily:'Avenir',
    },
    textName:{
        marginVertical:5,
        paddingLeft:10,
        fontFamily:'Avenir',
    }
});