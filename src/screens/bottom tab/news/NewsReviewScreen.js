import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, globalStyle} from '../../../constants';

const NewsReviewScreen = ({navigation, route}) => {
  const data = route.params.data;

  return (
    <View style={{flex: 1}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="News Review Screen"
        leftArrow={allImage.leftarrow}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
        <View style={{marginTop: hp(4)}}>
          <View
            style={{
              height: hp(35),
              ...globalStyle.makeInCenter,
            }}>
            <Image
              style={{
                height: hp(35),
                width: wp(40),
              }}
              source={data.img}
            />
          </View>

          <View
            style={{flexShrink: 1, paddingHorizontal: wp(5), marginTop: hp(5)}}>
            <Text style={{fontSize: wp(4), fontWeight: 'bold'}}>
              {data.txt}
            </Text>

            <Text style={{fontSize: wp(3), textAlign: 'justify'}}>
              {data.txt1}
            </Text>
          </View>
        </View>
        <View style={{marginTop: hp(2), paddingHorizontal: hp(4)}}>
          <Text style={{fontWeight: 'bold'}}>Genre: </Text>
          <Text> {data.Genre} |</Text>

          <Text style={{marginTop: hp(2), fontSize: wp(4), fontWeight: 'bold'}}>
            Cast
          </Text>
          <View
            style={{
              ...globalStyle.itemInCenter,
              flexWrap: 'wrap',
            }}>
            {data.cast.map((item, index) => {
              return (
                <View key={index} style={style.container}>
                  <View style={{height: hp(6)}}>
                    <Image style={style.imageStyle} source={item.img} />
                  </View>
                  <View style={{width: wp(20), marginTop: hp(2)}}>
                    <Text style={{fontSize: wp(3), textAlign: 'center'}}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsReviewScreen;

const style = StyleSheet.create({
  container: {
    marginRight: wp(3),
    marginTop: hp(5),
    alignItems: 'center',

    height: hp(10),

    width: wp(90) / 5,
  },
  imageStyle: {
    height: wp(15),
    width: wp(15),
    borderRadius: wp(15),
  },
});
