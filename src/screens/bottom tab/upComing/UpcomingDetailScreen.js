import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allcolor, allImage} from '../../../constants';

const UpcomingDetailScreen = ({navigation, route}) => {
  const data = route.params.data;
  return (
    <View style={{flex: 1}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="Movie Details"
        leftIcon={allImage.leftarrow}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
        <View style={{alignItems: 'center', marginTop: hp(3)}}>
          <Image
            style={{height: hp(40), width: wp(65), borderRadius: wp(4)}}
            source={data.img}
          />
          <Text style={{fontSize: wp(5), marginTop: hp(2), fontWeight: 'bold'}}>
            {data.text}
          </Text>
        </View>
        <View style={{paddingHorizontal: hp(5)}}>
          <Text style={{fontSize: wp(4), marginTop: hp(3), fontWeight: 'bold'}}>
            Movie Details
          </Text>
          <Text
            style={{
              fontSize: wp(3),
              marginTop: hp(0),

              textAlign: 'justify',
            }}>
            {data.text1}
          </Text>
          <Text style={{fontSize: wp(4), marginTop: hp(3), fontWeight: 'bold'}}>
            Genre
          </Text>
          <Text style={{fontSize: wp(4)}}>{data.Genre} |</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpcomingDetailScreen;
