import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allcolor, allImage} from '../../constants';

const Button1 = ({txt}) => {
  return (
    <View style={[style.container, {borderColor: allcolor.theme}]}>
      <Text
        style={{fontWeight: 'bold', color: allcolor.theme, fontSize: wp(3)}}>
        {txt}
      </Text>
      <Image
        resizeMode="contain"
        style={{
          height: hp(5),
          width: wp(5),
          tintColor: allcolor.theme,
          marginLeft: wp(5),
        }}
        source={allImage.rightarrow}
      />
    </View>
  );
};

export default Button1;
const style = StyleSheet.create({
  container: {
    height: hp(5),
    width: wp(40),
    borderWidth: 1,
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },
});
