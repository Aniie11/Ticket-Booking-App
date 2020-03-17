import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {globalStyle} from '../../constants';

const Card = ({children, styleOverride}) => {
  return (
    <View
      style={[
        style.container,
        {
          ...styleOverride,
          ...globalStyle.shadow,
        },
      ]}>
      {children}
    </View>
  );
};

export default Card;
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: wp(4),
    borderRadius: wp(4),
    marginTop: hp(3),
  },
});
