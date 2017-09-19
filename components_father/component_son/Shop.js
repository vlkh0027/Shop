import React,{Component } from 'React';
import{Image, StyleSheet,View,Text, ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import PropTypes from 'prop-types';
import Collection from './shop_com/Collection';
import Category from './shop_com/Category';
import TopProduct from './shop_com/TopProduct';
import Detail from './productDetail/Detail';
import ListProducts from './productDetail/ListProducts';
import ShopView from './ShopView';

const ShopStack = StackNavigator({
  
    ShopView: { screen: ShopView },
    Detail: { screen: Detail },
    ListProducts: { screen: ListProducts },
    },
  
    {
        initialRouteName:'ShopView',
        //initialRouteParams: this.props.navigation.state.paramsparams.types,
        headerMode:'none',
        navigationOptions :{
            
         }  
    },

  );

export default ShopStack;