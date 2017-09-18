import React,{Component} from 'React';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default class ListProducts extends Component{
   
    goBack(){
        this.props.navigation.goBack();  
    }

    goToDetail(){
        this.props.navigation.navigate('Detail');
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:'#587795'}}>
                <TouchableOpacity onPress={()=>{this.goBack()}}>
                    <Text>back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.goToDetail()}}>
                    <Text>detail</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
