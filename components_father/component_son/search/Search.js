import React,{Component } from 'React';
import{Image, StyleSheet,View,Text, ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';

import SearchView from './SearchView'
import Detail from './../productDetail/Detail';
//import CartView from './CartView';

const SearchStack = StackNavigator({

    SearchView:{ screen: SearchView },
    Detail: { screen: Detail },
    },
  
    {
        initialRouteName:'SearchView',
        headerMode:'none',
         navigationOptions :{
            
         }
    }
  );

export default SearchStack;