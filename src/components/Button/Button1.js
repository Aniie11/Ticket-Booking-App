import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allcolor, allImage} from '../../constants';

const Button1 = ({txt}) => {
  return (
    <View
      style={{
        height: hp(5),
        width: wp(40),
        borderWidth: 1,
        borderRadius: wp(2),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: allcolor.theme1,
        flexDirection: 'row',
      }}>
      <Text style={{fontWeight: 'bold', color: allcolor.theme1}}>{txt}</Text>
      <Image
        resizeMode="contain"
        style={{
          height: hp(5),
          width: wp(5),
          tintColor: allcolor.theme1,
          marginLeft: wp(5),
        }}
        source={allImage.rightarrow}
      />
    </View>
  );
};

export default Button1;
