import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allcolor} from '../../constants/';

const InputText = ({
  text,
  text1,
  txtInputOverride,
  textValue,
  onChangeUpdateText,
  Visibility,
}) => {
  return (
    <View style={{marginTop: hp(1)}}>
      <Text>{text}</Text>
      <View style={{marginTop: hp(1)}}>
        <TextInput
          secureTextEntry={Visibility}
          value={textValue} // name ko lagi
          placeholder={text1}
          style={{
            borderWidth: 1,
            // width: wp(85),
            height: hp(6),
            borderColor: allcolor.borderColour,
            borderRadius: wp(2),
            marginLeft: wp(0),

            ...txtInputOverride,
          }}
          onChangeText={val => onChangeUpdateText(val)} //setname ko lagi(state update garna)
        />
      </View>
    </View>
  );
};

export default InputText;
