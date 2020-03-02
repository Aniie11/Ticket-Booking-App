import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Card = ({children, styleOverride}) => {
  return (
    <View
      style={[
        style.container,
        {
          ...styleOverride,
        },
      ]}>
      {children}
      {/* card component le j j wrap garya xa tyo sap children ma baseko hunxa   */}
    </View>
  );
};

export default Card;
const style = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: wp(4),
    borderRadius: wp(4),
    marginTop: hp(3),
  },
});
