import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allColor, allImage} from '../../constants';

const NextButton = ({txt}) => {
  return (
    <View style={[style.container, {borderColor: allColor.theme}]}>
      <Text
        style={{fontWeight: 'bold', color: allColor.theme, fontSize: wp(3)}}>
        {txt}
      </Text>
      <Image
        resizeMode="contain"
        style={[style.imgStyle, {tintColor: allColor.theme}]}
        source={allImage.rightarrow}
      />
    </View>
  );
};

export default NextButton;
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
  imgStyle: {
    height: hp(5),
    width: wp(5),

    marginLeft: wp(5),
  },
});
