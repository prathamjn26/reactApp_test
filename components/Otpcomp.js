import React, { Component } from 'react'
import {View,StyleSheet, Linking} from 'react-native'
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text,Input,Button} from 'react-native-elements'


export default class Timer extends Component {
    state = {
        seconds: 30,
        number:""
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            else{
                    clearInterval(this.myInterval)
                } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    onChangedText=(text)=>{
        this.setState({
            number:text
        })
        console.log(text)
    }

    render() {
        const { seconds } = this.state
        const LinkButton=()=>{
            return(
                <Text>Hey</Text>
            )
        }

        return (
            <View style={styles.container} >
                <Text style={styles.textshow}>Enter Otp</Text>

                <Text style={styles.textshowB}>+919521833830 <Text style={styles.textlink} onPress={()=>Linking.openURL("")}> CHANGE</Text></Text>

                <Input style={styles.input}
                maxLength={6}
                keyboardType="numeric"
                onChangeText={this.onChangedText}
                value={this.state.number}/>
        
                {seconds === 0
                    ? <Text style={styles.textshowB}>
                        Didn't get the OTP? 
                        <Text style={styles.textlink}> RESEND OTP</Text>
                        </Text>
                    : <Text style={styles.textshowB}>00:{seconds < 10 ? `0${seconds}` : seconds}</Text>
                }
        
                <Button 
                title="Login" 
                buttonStyle={{borderRadius:50,width:"65%",alignSelf:"center",backgroundColor:"#4cd137"}} 
                disabled={false} 
                disabledStyle={{backgroundColor:"rgba(76, 209, 55,0.4)"}}
                disabledTitleStyle={{color:"#fff"}} />

                
            </View>
        )
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
    },
    textlink:{
        color:"rgb(76, 209, 55)",
        fontWeight:"bold"
    }
})
