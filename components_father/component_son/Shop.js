import React,{Component } from 'React';
import{Image, StyleSheet,View,Text, ScrollView} from 'react-native';
import Collection from './shop_com/Collection';
import Category from './shop_com/Category';
import TopProduct from './shop_com/TopProduct';

export default class Shop extends Component{
    render(){
        return(
            <ScrollView style={{flex:1}}>
                <Collection/>
                <Category/>
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