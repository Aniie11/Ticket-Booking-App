import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button/Button';

import {allImage} from '../../constants';
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', marginTop: hp(10)}}>
        <Image
          resizeMode="contain"
          style={{height: wp(50), width: wp(50)}}
          source={allImage.LOGO}
        />
      </View>
      <View style={style.container}>
        <Text>Welcome to EAP Films & Theatres</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Button text="Get Started" txtOverride={{width: wp(70)}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: hp(10),
  },
  // container1: {
  //   backgroundColor: allcolor.theme1,
  //   height: hp(5),
  //   width: wp(65),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: wp(2),
  //   marginTop: hp(5),
  // },
});

export default WelcomeScreen;
