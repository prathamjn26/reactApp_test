import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import Login from './Logincomp';
import Carousel from './Carouselcomp';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Loginscreen extends Component {
    render() {
        return (
	    <View style={styles.container}>
		    <Carousel/>
			<Login/>
		</View>
        );
    }
}

const styles=StyleSheet.create({
	container:{
	flex:1,
	backgroundColor:'#4cd137',
	paddingLeft:wp('3.5%'),
	paddingRight:wp('3.5%'),
	paddingBottom:hp('2.5%')
	}})

export default Loginscreen;
