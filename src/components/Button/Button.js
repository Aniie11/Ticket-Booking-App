import React from 'react';
import {View, Text} from 'react-native';
import {allcolor} from '../../constants/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = ({text, txtOverride, txt1override}) => {
  return (
    <View
      style={{
        backgroundColor: allcolor.theme1,
        height: hp(6),

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp(2),
        marginTop: hp(5),
        ...txtOverride,
      }}>
      <Text style={{color: 'white', ...txt1override}}>{text}</Text>
    </View>
  );
};

export default Button;
