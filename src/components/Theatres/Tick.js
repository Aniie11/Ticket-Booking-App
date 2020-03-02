import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allImage, allcolor} from '../../constants';

const Tick = ({styleOverride}) => {
  return (
    <View
      style={{
        position: 'absolute',
        height: wp(3),
        width: wp(3),
        backgroundColor: allcolor.CircleColor,
        borderRadius: wp(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(18),
        marginLeft: wp(18),
        ...styleOverride,
      }}>
      <Image
        resizeMode="center"
        style={{height: hp(2), width: wp(2), tintColor: 'white'}}
        source={allImage.tick}
      />
    </View>
  );
};

export default Tick;
