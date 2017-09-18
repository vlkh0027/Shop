import React,{Component } from 'React';
import{Image, StyleSheet,View,Text, ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';


import Detail from './../productDetail/Detail';
import CartView from './CartView';

const CartStack = StackNavigator({

    CartView:{ screen: CartView },
    Detail: { screen: Detail },
    },
  
    {
        initialRouteName:'CartView',
        headerMode:'none',
         navigationOptions :{
            
         }
    }
  );

export default CartStack;