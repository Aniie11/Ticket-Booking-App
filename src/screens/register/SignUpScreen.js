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
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const SignUpScreen = ({navigation}) => {
  const [numberType, setNumberType] = useState('+977');
  const [firstName, setFirstName] = useState();
  const [Email, setEmail] = useState();
  const [lastName, setLastName] = useState();

  const [pw, setPw] = useState();
  return (
    // <MenuProvider>
    <View style={{flex: 1}}>
      <HeaderTop text="Signup" />

      <Card>
        <View style={{padding: wp(5)}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <InputText
              onChangeUpdateText={val => setFirstName(val)}
              text="First name"
              text1="Enter FirstName"
              txtInputOverride={{width: wp(38)}}
            />
            <InputText
              onChangeUpdateText={val => setLastName(val)}
              text="Last name"
              text1="Enter LastName"
              txtInputOverride={{width: wp(38)}}
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
                      tintColor: allcolor.bordercolor,
                      marginRight: wp(1),
                    }}
                    source={require('../../resource/downarrow.png')}
                  />
                </View>
              </MenuTrigger>
              <MenuOptions>
                <MenuOption onSelect={() => setNumberType('+977')}>
                  <Text style={{color: 'black'}}>+977</Text>
                </MenuOption>
                <MenuOption onSelect={() => setNumberType('+022')}>
                  <Text style={{color: 'black'}}>+022</Text>
                </MenuOption>
                <MenuOption onSelect={() => setNumberType('+113')}>
                  <Text style={{color: 'black'}}>+113</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
            <InputText text="Mobile number" />
          </View>
          <InputText
            onChangeUpdateText={val => setEmail(val)}
            text="Email"
            text1="Enter email address"
          />
          <InputText
            onChangeUpdateText={val => setPw(val)}
            text="Password"
            text1="Enter password"
          />
          <TouchableOpacity>
            <Button text="Sign Up" />
          </TouchableOpacity>
        </View>
      </Card>
      <View style={style.container1}>
        <Text style={{color: allcolor.textColor}}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={{color: allcolor.theme, marginLeft: wp(3)}}>Signin</Text>
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
    borderColor: allcolor.bordercolor,
    borderWidth: 1,
    borderRadius: wp(2),
    marginTop: hp(5),
    marginRight: wp(4),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container1: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(8),
  },
});

export default SignUpScreen;
