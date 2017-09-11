import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { DrawerItems,DrawerNavigator} from 'react-navigation';

import ChangeInfo from './components_father/ChangeInfo';
import HistoryOder from './components_father/HistoryOder';
import SaleOf from './components_father/SaleOf';
import Home from './components_father/Home';
import Menu from './components_father/Menu';
import Authentication from './components_father/authentication/Authentication';

var {height, width} = Dimensions.get('window');

const MyAppDrawer = DrawerNavigator({
  
    Home:{
        screen:Home
    },
    SaleOf: {
        screen: SaleOf,
      },
    Change_Info: {
      screen: ChangeInfo,
    },
    History_Oder: {
      screen: HistoryOder,
    },
    Authentication:{
      screen: Authentication,
    }
  },
  {
      initialRouteName:'Home',
      drawerPosition:'left',
      drawerWidth: width/1.5,
      contentComponent: props => <Menu {...props} />
  },
  
);
export default MyAppDrawer;
