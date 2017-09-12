import React,{Component } from 'React';
import{Image, StyleSheet,View,Text, ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Collection from './shop_com/Collection';
import Category from './shop_com/Category';
import TopProduct from './shop_com/TopProduct';
import Detail from './productDetail/Detail';
import ListProducts from './productDetail/ListProducts';

export default class ShopView extends Component{
    render(){
        return(
           <ScrollView style={{flex:1}}>
                <Collection/>      
                <Category navigation ={this.props.navigation} />
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