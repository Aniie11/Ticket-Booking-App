import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import InputText from '../../components/InputText/InputText';
import Button from '../../components/Button/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allcolor} from '../../constants';
import HeaderTop from '../../components/Header/HeaderTop';
import Card from '../../components/Card/Card';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const SignUpScreen = ({navigation}) => {
  const [numberType, setnumberType] = useState('');
  return (
    // <MenuProvider>
    <View style={{flex: 1}}>
      <HeaderTop text="Signup" />

      <Card>
        <View style={{padding: wp(5)}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <InputText
              text="First name"
              text1="Enter FirstName"
              txtInputOverride={{width: wp(35)}}
            />
            <InputText
              text="Last name"
              text1="Enter LastName"
              txtInputOverride={{width: wp(35)}}
            />
          </View>
          <InputText text="Username" text1="Enter Username" />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Menu>
              <MenuTrigger>
                <View style={style.container}>
                  <Text>{numberType}</Text>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: hp(3),
                      width: wp(3),
                      tintColor: allcolor.borderColour,
                      marginRight: wp(1),
                    }}
                    source={require('../../resource/downarrow.png')}
                  />
                </View>
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() => setnumberType('+977')}>
                  <Text style={{color: 'black'}}>+977</Text>
                </MenuOption>
                <MenuOption onSelect={() => setnumberType('+022')}>
                  <Text style={{color: 'black'}}>+022</Text>
                </MenuOption>
                <MenuOption onSelect={() => setnumberType('+113')}>
                  <Text style={{color: 'black'}}>+113</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
            <InputText text="Mobile number" />
          </View>
          <InputText text="Email" text1="Enter email address" />
          <InputText text="Password" text1="Enter password" />
          <TouchableOpacity>
            <Button text="Sign Up" />
          </TouchableOpacity>
        </View>
      </Card>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: hp(8),
        }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={{color: allcolor.theme1, marginLeft: wp(3)}}>
            Signin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </MenuProvider>
  );
};
const style = StyleSheet.create({
  container: {
    height: hp(6),
    width: wp(20),
    borderColor: allcolor.borderColour,
    borderWidth: 1,
    borderRadius: wp(2),
    marginTop: hp(5),
    marginRight: wp(4),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default SignUpScreen;