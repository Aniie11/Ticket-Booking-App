import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, allColor} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../../../components/Card/Card';

const accountOptions = [
  'Change Password',
  'Change Mobile Number',
  'Two-step Verification',
  'Change Email',
];

const SupportOptions = [
  'Careers',
  'Help and Support',
  'About Us',
  'Contact Us',
  'Privacy Policy',
  'Terms of Use',
  'Disclaimer',
];

const SettingScreen = () => {
  const settingTab = title => {
    return (
      <View style={style.container}>
        <Text>{title}</Text>
        <Image
          resizeMode="contain"
          style={{height: hp(5), width: wp(5), tintColor: 'grey'}}
          source={allImage.rightarrow1}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: wp(4)}}>
        <HeaderTop text="Movies" rightArrow={allImage.user} />
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
        <View>
          <Card>
            <View style={{paddingHorizontal: wp(4), marginVertical: hp(2)}}>
              <Text style={style.style1}>Account</Text>
              {accountOptions.map((item, index) => (
                <View key={index}>{settingTab(item)}</View>
              ))}
            </View>
          </Card>
          <Card>
            <View style={{marginVertical: hp(2), marginHorizontal: wp(4)}}>
              <Text style={style.style2}>Support</Text>
              {SupportOptions.map((item, index) => (
                <View key={index}>{settingTab(item)}</View>
              ))}
              <Text>Logout</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  style1: {
    color: allColor.theme,
    fontWeight: 'bold',
    fontSize: wp(4),
    marginBottom: hp(2),
  },
  style2: {
    color: allColor.theme,
    fontWeight: 'bold',
    fontSize: wp(4),
    marginBottom: hp(2),
  },
});

//item = title = {title}
