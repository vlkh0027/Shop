import React,{Component} from 'React';
import {View,Text,TouchableOpacity,StyleSheet,Image, Dimensions, ScrollView} from 'react-native';

export default class ListProducts extends Component{
   
    goBack(){
        this.props.navigation.goBack();  
    }

    goToDetail(){
        this.props.navigation.navigate('Detail');
    }

    render(){
        const{ container, header, wrapper, backStyle, titleStyle, 
            productContainer, productInfo, productImage, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail } = styles;
        return(
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={()=>{this.goBack()}}>
                            <Image source={require('./../../../image/back.png')}
                            style={backStyle}/>
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{width:30}}/>
                    </View>
                    <View style={productContainer}>
                        <Image style={productImage} source={require('./../../../image/nikeColl.png')}/>
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>113$</Text>
                            <Text style={txtMaterial}>Material: Gold</Text>
                            <View style={lastRowInfo}> 
                                <Text style={txtColor}>Color Royal Blue</Text>
                                <View style={{backgroundColor:'#0F2153',width:16,height:16,borderRadius:8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>show details</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                    
                    <View style={productContainer}>
                        <Image style={productImage} source={require('./../../../image/nikeColl.png')}/>
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>113$</Text>
                            <Text style={txtMaterial}>Material: Gold</Text>
                            <View style={lastRowInfo}> 
                                <Text style={txtColor}>Color Royal Blue</Text>
                                <View style={{backgroundColor:'#0F2153',width:16,height:16,borderRadius:8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>show details</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                   
                    <View style={productContainer}>
                        <Image style={productImage} source={require('./../../../image/nikeColl.png')}/>
                        <View style={productInfo}>
                            <Text style={txtName}>Lace Sleeve Si</Text>
                            <Text style={txtPrice}>113$</Text>
                            <Text style={txtMaterial}>Material: Gold</Text>
                            <View style={lastRowInfo}> 
                                <Text style={txtColor}>Color Royal Blue</Text>
                                <View style={{backgroundColor:'#0F2153',width:16,height:16,borderRadius:8}}/>
                                <TouchableOpacity>
                                    <Text style={txtShowDetail}>show details</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#E9E9EF',
        padding:10,
    },
    header:{
        flexDirection:'row',
        height:height/14,
        justifyContent:'space-between',
        padding:5,
        alignItems:'center',
    },
    wrapper:{
        backgroundColor:'#FFFFFF',
        shadowColor:'#404040',        
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.2,
        paddingHorizontal: 10
    },
    backStyle:{
        width:30,
        height:30,
    },
    titleStyle:{
        fontFamily:'Avenir',
        color:'#A9B9FC',
        fontSize:18,
    },
    productImage:{
        width:width/4,
        height:(width/4) + 20,
    },
    lastRowInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    productContainer:{
        flexDirection:'row',
        borderTopColor:'#CECECE',
        borderTopWidth:1,
        paddingVertical:15, 
    },
    productInfo:{
        justifyContent:'space-around',
        marginLeft:10,
        flex:1
    },
    txtName:{
        fontFamily:'Avenir',
        color:'#3E538A',
        fontSize:20,
        fontWeight:'400',
    }, 
    txtPrice:{
        fontFamily:'Avenir',
        fontWeight:'bold',
        color:'#EF596F',
    }, 
    txtMaterial:{
        fontFamily:'Avenir',
    }, 
    txtColor:{
        fontFamily:'Avenir',
    }, 
    txtShowDetail:{
        fontFamily:'Avenir',
        fontWeight:'bold',
        color:'#EF596F',
        fontSize:11,
    },
});