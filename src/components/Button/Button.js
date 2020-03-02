import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {allcolor} from '../../constants/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Button = ({text, txtOverride, txt1override}) => {
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: allcolor.theme1,

          ...txtOverride,
        },
      ]}>
      <Text style={{color: 'white', ...txt1override}}>{text}</Text>
    </View>
  );
};

export default Button;
const style = StyleSheet.create({
  container: {
    height: hp(6),

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    marginTop: hp(5),
  },
});
