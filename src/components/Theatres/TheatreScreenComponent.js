import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allImage, allcolor} from '../../constants';
import Card from '../../components/Card/Card';

const selectingImage = [
  {
    img: allImage.foodtruck,
    tick: true,
  },
  {
    img: allImage.popcorn,
    tick: true,
  },
  {
    img: allImage.menutheatre,
    tick: true,
  },
];

const TheatreScreenComponent = ({img, txt, txt1, txt2, txt3}) => {
  return (
    <View style={{flex: 1, marginHorizontal: wp(5)}}>
      <Card styleOverride={{marginHorizontal: wp(0)}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: hp(25),
              width: wp(40),
              borderTopLeftRadius: wp(4),
              borderBottomLeftRadius: wp(4),
            }}
            source={img}
          />
          <View
            style={{
              marginTop: hp(2),
              marginLeft: wp(4),
            }}>
            <Text style={{fontWeight: 'bold', fontSize: wp(3)}}>{txt}</Text>
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

            <View
              style={{
                flexDirection: 'row',

                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              {selectingImage.map((item, index) => {
                return (
                  <View key={index} style={{marginLeft: wp(3)}}>
                    <Image
                      resizeMode="contain"
                      style={{height: hp(6), width: wp(6)}}
                      source={item.img}
                    />
                    {item.tick ? (
                      <View
                        style={{
                          position: 'absolute',
                          height: wp(3),
                          width: wp(3),
                          backgroundColor: allcolor.CircleColor,
                          borderRadius: wp(5),
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: hp(4),
                          marginLeft: wp(-2),
                        }}>
                        <Image
                          resizeMode="center"
                          style={{
                            height: hp(2),
                            width: wp(2),
                            tintColor: 'white',
                          }}
                          source={allImage.tick}
                        />
                      </View>
                    ) : null}
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default TheatreScreenComponent;
