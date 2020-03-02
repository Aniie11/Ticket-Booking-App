import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allImage} from '../../constants';
import Card from '../../components/Card/Card';
import Tick from '../Theatres/Tick';

const TheatreScreenComponent = ({img, txt, txt1, txt2, txt3}) => {
  return (
    <Card>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            height: hp(25),
            width: wp(40),
            borderTopLeftRadius: wp(4),
            borderBottomLeftRadius: wp(4),
          }}
          source={img}
        />
        <View style={{marginLeft: wp(3), marginTop: hp(2)}}>
          <Text style={{fontWeight: 'bold'}}>{txt}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{height: hp(4), width: wp(4)}}
              source={allImage.pin}
            />
            <Text style={{fontSize: wp(2), marginLeft: wp(4)}}>{txt1}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{height: hp(4), width: wp(4)}}
              source={allImage.phone}
            />
            <Text style={{fontSize: wp(2), marginLeft: wp(4)}}>{txt2}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{height: hp(4), width: wp(4)}}
              source={allImage.mail}
            />
            <Text style={{fontSize: wp(2), marginLeft: wp(4)}}>{txt3}</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: wp(20)}}>
            <Image
              resizeMode="contain"
              style={{height: hp(5), width: wp(5)}}
              source={allImage.foodtruck}
            />
            <Image
              resizeMode="contain"
              style={{height: hp(5), width: wp(5), marginLeft: wp(3)}}
              source={allImage.popcorn}
            />
            <Image
              resizeMode="contain"
              style={{height: hp(5), width: wp(5), marginLeft: wp(3)}}
              source={allImage.menutheatre}
            />
          </View>
          <Tick styleOverride={{marginLeft: wp(35)}} />
          <Tick styleOverride={{marginLeft: wp(27)}} />
          <Tick />
        </View>
      </View>
    </Card>
  );
};

export default TheatreScreenComponent;
