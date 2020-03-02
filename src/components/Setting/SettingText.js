import React from 'react';
import {View, Text, Image} from 'react-native';
import {allImage} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SettingText = ({text, img}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>{text}</Text>
      <Image
        resizeMode="contain"
        style={{height: hp(5), width: wp(5), tintColor: 'grey'}}
        source={allImage.rightarrow1}
      />
    </View>
  );
};

export default SettingText;
