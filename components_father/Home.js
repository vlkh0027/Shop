import React,{Component } from 'React';
import{Image, StyleSheet, View, Dimensions, Text,TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Order from './component_son/Order';
import Search from './component_son/Search';
import Shop from './component_son/Shop';
import Contact from './component_son/Contact';
import Header from './Header';

var {height, width} = Dimensions.get('window');
export default class Home extends Component{

 
    constructor(props){
        super(props);
        this.state= {selectedTab: 'shop'}
        //this.props.navigation.navigate('DrawerClose');
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
                <Shop/>
              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'order'}
                title="Cart"
                renderIcon={() => <Image style={styles.icon} source={require('./../image/cart.png')}/>} 
                badgeText="1"
                selectedTitleStyle={{color:'black', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'order' })}>
                <Order/>
              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'search'}
                title="Search"
                renderIcon={() => <Image style={styles.icon} source={require('./../image/search.png')}/>} 
                selectedTitleStyle={{color:'black', fontFamily:'Avenir'}}  
                onPress={() => this.setState({ selectedTab: 'search' })}>
                <Search/>
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