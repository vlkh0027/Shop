import React,{Component } from 'React';
import{Image, StyleSheet,View,Text, ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Collection from './shop_com/Collection';
import Category from './shop_com/Category';
import TopProduct from './shop_com/TopProduct';
import Detail from './productDetail/Detail';
import ListProducts from './productDetail/ListProducts';

const Stack = StackNavigator({
    //ShopView: { screen: ShopView },
    Category: { screen: Category },
    Detail: { screen: Detail },
    ListProducts: { screen: ListProducts },
    },
  
    {
        initialRouteName:'Category',
        headerMode:'none',
         navigationOptions :{
            
         }
    }
  );

export default class ShopView extends Component{
    render(){
        return(
           <ScrollView style={{flex:1}}>
                <Collection/>      
                <Stack />
                <TopProduct/>
         </ScrollView>    
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 25,
      height: 25,
    },
  });