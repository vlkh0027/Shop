import React,{Component} from 'React';
import {View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';

export default class Detail extends Component{
   
    goBack(){
        this.props.navigation.goBack();  
    }

    render(){
        return(
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>{this.goBack()}}>
                    <Text>back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
