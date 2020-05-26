import React, { Component } from 'react';
import { StyleSheet, View,TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text,Input,Button,ThemeProvider} from 'react-native-elements'

const theme = {
	Button:{
		borderRadius:"25%"},
  };

class Logincomp extends Component {
    render() {
        return (
        <View style={styles.container} >
		<Text style={styles.textshow}>Enter Number</Text>

		<Input placeholder="Mobile Number (10-digit)" style={styles.input}/>

		<Text style={styles.textshowB}>
		By tapping continue, I agree to the ,Terms of Use
		</Text>

		<Button 
		title="Continue" 
		buttonStyle={{borderRadius:50,width:"65%",alignSelf:"center",backgroundColor:"#4cd137"}} 
		disabled={false} 
		disabledStyle={{backgroundColor:"rgba(76, 209, 55,0.4)"}}
		disabledTitleStyle={{color:"#fff"}} />
        </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
	position:"absolute",
	alignSelf:"stretch",
	backgroundColor:"white",
	paddingLeft:40,
	paddingRight:40,
	paddingTop:hp('3.5%'),
	paddingBottom:hp('3.5%'),
	borderRadius:3,
	bottom:0,
	left:20,
	right:20
    },
    textshow:{
	color:'#36485f',
	marginBottom:hp('2.7%'),
	textAlign:'center',
	},
    textshowB:{
	color:'rgb(118,118,118)',
	paddingBottom:10,
	marginBottom:hp('1.5%'),
	textAlign:'center',
	fontSize:11
	}
})

export default Logincomp;
