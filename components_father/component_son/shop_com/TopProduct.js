import React,{Component} from 'react';
import {Image, StyleSheet,View,Text,Dimensions, TouchableOpacity, FlatList} from 'react-native';

const url ="http://localhost/api/images/product/";

export default class TopProduct extends Component{

    gotoDetail(data){
        const {navigate} = this.props.navigation;
        navigate('Detail',{data});
    }

    render(){
        const{screenProps} = this.props;
        const {container, titleContainer, title, body, image, productContainer,textPrice, textName} = styles;
        return(           
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                    {/* {screenProps.map(e=> (
                        
                        <Text key={e.id}>{e.name}</Text>
                        ))} */}
                    
                </View>
                
                <FlatList contentContainerStyle={body} 
                   
                    data={screenProps} 
                    renderItem={({item}) => 
                        <TouchableOpacity 
                        onPress={()=>{this.gotoDetail(item)}}
                        style ={productContainer}>
                            <Image style={image} source={{uri:`${url}${item.images[0]}`}}/>
                            <Text style={textName}>{item.name.toUpperCase()}</Text>
                            <Text style={textPrice}>{item.price}$</Text>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                />
              
                
                    
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
        //flexDirection:'row',
        justifyContent:'space-around',
        //flexWrap:'wrap',
        paddingBottom:10,
        
    },
    productContainer:{
        width:imageWidth,
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        paddingBottom:5,
        marginLeft:13,
        marginBottom:10,
        
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