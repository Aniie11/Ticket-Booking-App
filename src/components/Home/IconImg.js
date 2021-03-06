import React from 'react';
import {View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const IconImg = ({img, color}) => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={{height: hp(7), width: wp(7), tintColor: color}}
        source={img}
      />
    </View>
  );
};

export default IconImg;
