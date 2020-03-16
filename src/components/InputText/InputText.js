import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
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
      <Text style={{color: allcolor.textColor}}>{text}</Text>
      <View style={{marginTop: hp(1)}}>
        <TextInput
          secureTextEntry={Visibility}
          value={textValue} // for name
          placeholder={text1}
          style={[
            style.container,
            {
              borderColor: allcolor.bordercolor,
              color: allcolor.textColor,

              ...txtInputOverride,
            },
          ]}
          onChangeText={val => onChangeUpdateText(val)} // to update state of setname
        />
      </View>
    </View>
  );
};

export default InputText;
const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: hp(6),
    borderRadius: wp(2),
    marginLeft: wp(0),
    paddingHorizontal: wp(3),
  },
});
