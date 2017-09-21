import React,{Component } from 'React';
import{Image, StyleSheet, View, Dimensions, Text,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';

import CartStack from './component_son/cart/Cart';
import SearchStack from './component_son/search/Search';
import ShopStack from './component_son/Shop';
import Contact from './component_son/Contact';
import Header from './Header';
import global from './global';
import initData from './../api/initData';
import saveCart from './../api/saveCart';
import getCart from './../api/getCart';
var {height, width} = Dimensions.get('window');


export default class Home extends Component{
 
    constructor(props){
        super(props);
        this.state= {
          selectedTab: 'shop',
          types:[],
          topProducts:[],
          cartArray:[],
        }
        global.addProductToCart = this.addProductToCart.bind(this);
        global.increaseQuantity = this.increaseQuantity.bind(this);
        global.decreaseQuantity = this.decreaseQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
    }

    /* lay api load len hone */
    componentDidMount(){
      initData()
      .then(resJSON => {
        const {type, product} = resJSON;
        this.setState({ 
          types: type, 
          topProducts:product });
      });
      getCart()
      .then(cartArrays => this.setState({cartArray:cartArrays}));
    };

    //them product
    addProductToCart(product){
      this.setState(
        { cartArray: this.state.cartArray.concat({product, quantity: 1})},
        () => saveCart(this.state.cartArray),
      );
    }

    increaseQuantity(productID){
      const newCartArr = this.state.cartArray.map(e => {
        if( e.product.id !== productID) return e;
        return { product: e.product, quantity: e.quantity+1 };
      });
      this.setState({cartArray:newCartArr},
        () => saveCart(this.state.cartArray)
      );
      
    }

    decreaseQuantity(productID){
      const newCartArr = this.state.cartArray.map(e => {
        if( e.product.id !== productID) return e;
        return { product: e.product, quantity: e.quantity-1 };
      });
      this.setState({cartArray:newCartArr},
        () => saveCart(this.state.cartArray), 
      );
    }

    removeProduct(productID){
      const newCartArr = this.state.cartArray.filter(e => e.product.id !== productID);
      this.setState({cartArray:newCartArr},
        () => saveCart(this.state.cartArray), 
      );
    }

    render(){
        return(
        <View style={{flex:1}}>
           <Header onOpen={() => {
                  this.props.navigation.navigate('DrawerOpen');
								}}/>
  
              <TabNavigator 
                tabBarStyle={{ height:height/12 , borderWidth: 0, 
                 borderTopColor: 'gray' }}
              >
              <TabNavigator.Item
                selected={this.state.selectedTab === 'shop'}
                title="Shop" 
                renderIcon={() => <Image style={styles.icon}  source={require('./../image/shop.png')}/>} 
                selectedTitleStyle={{color:'black', fontFamily:'Avenir'}}    
                onPress={() => this.setState({ selectedTab: 'shop' })}>
                <ShopStack screenProps={{
                  type : this.state.types,
                  product : this.state.topProducts,
                }} 
                 />

              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'cart'}
                title="Cart"
                renderIcon={() => <Image style={styles.icon} source={require('./../image/cart.png')}/>} 
                badgeText={this.state.cartArray.length}
                selectedTitleStyle={{color:'black', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'cart' })}>
                <CartStack screenProps={this.state.cartArray}/>

              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'search'}
                title="Search"
                renderIcon={() => <Image style={styles.icon} source={require('./../image/search.png')}/>} 
                selectedTitleStyle={{color:'black', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'search' })}>
                <SearchStack/>

              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'contact'}
                title="Contact"
                renderIcon={() => <Image style={styles.icon} source={require('./../image/contact.png')}/>} 
                selectedTitleStyle={{color:'black', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'contact' })}>
                <Contact/>

              </TabNavigator.Item>
            </TabNavigator>
   
        </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
      width: 25,
      height: 25,
    },
    
  });