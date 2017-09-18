import React,{Component} from 'React';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default class SearchView extends Component{
    
    gotoDetail(){
        const {navigate} = this.props.navigation;
        navigate('Detail');
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Text>Search</Text>
                <TouchableOpacity 
                    onPress={()=>{this.gotoDetail()}}>
                    <Text>goto De</Text>
                </TouchableOpacity>
            </View>
        )
    }
}