import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, allcolor} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../../../components/Card/Card';
import SettingText from '../../../components/Setting/SettingText';

const SettingScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: wp(4)}}>
        <HeaderTop text="Movies" rightIcon={allImage.user} />
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
        <View>
          <Card>
            <View style={{paddingHorizontal: wp(4), marginVertical: hp(2)}}>
              <Text style={style.style1}>Account</Text>
              <SettingText text="Change Password" />
              <SettingText text="Change Mobile Number" />
              <SettingText text="Two-step Verification" />
              <SettingText text="Change Email" />
            </View>
          </Card>
          <Card>
            <View style={{marginVertical: hp(2), marginHorizontal: wp(4)}}>
              <Text style={style.style2}>Support</Text>
              <SettingText text="Careers" />
              <SettingText text="Help and Support" />
              <SettingText text="About Us" />
              <SettingText text="Contact Us" />
              <SettingText text="Privacy Policy" />
              <SettingText text="Terms of Use" />
              <SettingText text="Disclaimer" />
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
  style1: {
    color: allcolor.theme1,
    fontWeight: 'bold',
    fontSize: wp(4),
    marginBottom: hp(2),
  },
  style2: {
    color: allcolor.theme1,
    fontWeight: 'bold',
    fontSize: wp(4),
    marginBottom: hp(2),
  },
});
