import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allcolor} from '../../constants';

const HeaderTop = ({onpress, text, leftArrow, rightArrow}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onpress}>
        {leftArrow ? (
          <Image
            resizeMode="contain"
            style={{height: hp(6), width: wp(6)}}
            source={leftArrow}
          />
        ) : (
          <View />
        )}
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: wp(4),
          color: allcolor.textColor,
        }}>
        {text}
      </Text>

      {rightArrow ? (
        <Image
          resizeMode="contain"
          style={{height: hp(6), width: wp(6)}}
          source={rightArrow}
        />
      ) : (
        <View />
      )}
    </View>
  );
};

export default HeaderTop;
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1),
    paddingHorizontal: wp(5),
  },
});
