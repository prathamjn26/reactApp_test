import React from 'react';
import {Carousel} from '@ant-design/react-native';
import img1 from './assests/1.png';
import img2 from './assests/2.png';
import img3 from './assests/3.png';
import { View,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text} from 'react-native-elements';

const CarouselData = [
    {
        id: 1,
        src: 'https://www.freepngimg.com/thumb/ecommerce/1-2-ecommerce-png.png',
        title: "Homemade",
        description: "Subscribe and get healthy homemade items."
    },
    {
        id: 2,
        src: 'https://png2.cleanpng.com/sh/545b6cc2641e58cddda9308d1161c532/L0KzQYm4UsE2N6FqkJH0aYP2gLBuTgNpd6F1gdDwLXPkgsW0lvVkfJD3Rdl7YYDrebT6TgN1d5RwReJxb4Tyd8PokPh6NZpxRdH3cILsfba0gB9vbZR5edDtbz35f7S0gf8ue5Z6RdV1aXXxhLa0VfMyPZU2TaJtN0G3cYe1UME0QGM8Sqo6NUS3SYS6V8EzQGk2RuJ3Zx==/kisspng-shopping-cart-vector-graphics-stock-photography-il-onprime-conectando-voc-ao-seu-cliente-5c15d150d714a6.013827281544933712881.png',
        title: "Everyday & Essential",
        description: "Get product on time in timeperiod without any problem."
    },
    {
        id: 3,
        src: 'https://www.freepngimg.com/thumb/ecommerce/63201-information-network-computer-internet-data-icon.png',
        title: "All over India",
        description: "We have thousands of seller of homemade product from all over india."
    },
];


class Carouselcomp extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      console.log('triger')
    }, 100);
  }

  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
        >
          {CarouselData.map(val => (
              <>
		<Image
                key={val.id}
                source={{uri:val.src}}
                alt={val.title}
                style={{height:hp('28%'),
                    width:wp('42%'),
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginTop:hp('13%'),
                    marginBottom:hp('2%'),
                    }}
        />
		
		<View>
			<Text style={{
                    fontSize:18,
					          color:'#fff',
                    padding:10,
                    textAlign:"center",
		          			marginBottom:hp('1%'),
				          }}>
				{val.title}
			</Text>

			<Text style={{
                    color:'#fff',
                    textAlign:"center",
                    marginBottom:hp('11%'),
                    justifyContent:'center',
                    paddingLeft:wp('5%'),
				          	paddingRight:wp('5%'),
		      		    }}>
				{val.description}
			</Text>
		</View>
	     </>
          ))}
        </Carousel>
    );
  }
}

export default Carouselcomp
