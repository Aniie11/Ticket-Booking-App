import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputText from '../../components/InputText/InputText';
import Button from '../../components/Button/Button';
import {allcolor} from '../../constants';
import Card from '../../components/Card/Card';
import HeaderTop from '../../components/Header/HeaderTop';

const user = [{name: 'Hello', pw: 'world'}];

const SignInScreen = ({navigation}) => {
  const [name, setname] = useState();
  const [pw, setpw] = useState();
  const [visible, setvisible] = useState(true);

  const LOGIN = () => {
    if (name === 'Hello' && pw === 'world') {
      navigation.navigate('MyTabs');
    } else if (name !== 'Hello') {
      alert('Incorrect Username');
    } else if (pw !== 'world') {
      alert('Incorrect password');
    } else if (name === '' && pw === '');
  };
  return (
    <View style={{flex: 1}}>
      <HeaderTop text="Signin" />

      <Card>
        <View style={{padding: wp(5)}}>
          <InputText
            onChangeUpdateText={val => setname(val)}
            textValue={name}
            text="Username"
            text1="Enter Your Username"
          />
          <View
            style={{
              position: 'absolute',
              marginTop: hp(18),
              marginLeft: wp(75),

              zIndex: 1000,
            }}>
            <TouchableOpacity onPress={() => setvisible(!visible)}>
              {/*   // onPressIn={() => setvisible(false)}
          // onPressOut={() => setvisible(true)}} */}

              <Image
                resizeMode="contain"
                style={{height: hp(6), width: wp(6)}}
                source={
                  visible
                    ? require('../../resource/eye.png')
                    : require('../../resource/eyelash.png')
                }
              />
            </TouchableOpacity>
          </View>

          <InputText
            onChangeUpdateText={val => setpw(val)} //
            textValue={pw}
            text="Password"
            text1="Enter Password"
            Visibility={visible}
          />

          <View style={{alignItems: 'flex-end', marginTop: hp(3)}}>
            <TouchableOpacity onPress={() => alert('Remember your password')}>
              <Text style={{color: allcolor.textColor}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={LOGIN}>
            <Button text="Sign In " />
          </TouchableOpacity>
        </View>
      </Card>

      <View style={style.container}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={{color: allcolor.theme, marginLeft: wp(3)}}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(8),
  },
});
