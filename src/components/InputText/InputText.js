import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allColor} from '../../constants/';

const InputText = ({
  text,
  placeholder,
  txtInputOverride,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={{marginTop: hp(1)}}>
      <Text style={{color: allColor.textColor}}>{text}</Text>
      <View style={{marginTop: hp(1)}}>
        <TextInput
          secureTextEntry={secureTextEntry}
          value={value} // for name
          placeholder={placeholder}
          style={[
            style.container,
            {
              borderColor: allColor.borderColor,
              color: allColor.textColor,

              ...txtInputOverride,
            },
          ]}
          onChangeText={val => onChangeText(val)} // to update state of setname
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

    paddingHorizontal: wp(3),
  },
});
