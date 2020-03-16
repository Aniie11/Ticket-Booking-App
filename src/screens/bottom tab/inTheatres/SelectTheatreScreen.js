import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NextButton from '../../../components/Button/NextButton';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, allcolor, globalStyle} from '../../../constants';

const selectTheatreDatas = [
  {
    txt: 'Savoy 2',
    txt1: 'Wellawatte',
  },
  {
    txt: 'Savoy 3D',
    txt1: 'Wellawatte',
  },
  {
    txt: 'Cinemax 3D',
    txt1: 'Jaela',
  },
  {
    txt: 'Willmax 3D',
    txt1: 'Anuradhapura',
  },
  {
    txt: 'Queens 3D',
    txt1: 'Galle',
  },
  {
    txt: 'Jothi 3D',
    txt1: 'Rathnapura',
  },
  {
    txt: 'Sinexpo 3D',
    txt1: 'Kurunegala',
  },
];

const SelectTheatreScreen = ({navigation, route}) => {
  const data = route.params.data;
  const date = route.params.date;
  const time = route.params.time;
  const [touchable, settouchable] = useState({
    txt: '',
    txt1: '',
    index: '',
  });

  return (
    <View style={{flex: 1}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="Buy Tickets"
        leftArrow={allImage.leftarrow}
      />
      <View style={{paddingHorizontal: wp(5)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image style={{height: hp(15), width: wp(30)}} source={data.img} />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: wp(4)}}>
              {data.text}
            </Text>
            <Text style={{fontSize: wp(2)}}>{data.Genres}</Text>
            <View style={style.container}>
              <View style={style.container1}>
                <View
                  style={{
                    ...globalStyle.itemInCenter,
                  }}>
                  <Text style={style.txtStyle}>{date.day}</Text>
                  <Text style={style.txtStyle1}>{date.month}</Text>
                  <Text style={style.txtStyle1}>{date.date}</Text>
                </View>
              </View>

              <View style={style.container2}>
                <Text style={style.txtStyle}>{time}</Text>
              </View>
            </View>
            <View style={[style.container3, {...globalStyle.makeInCenter}]}>
              <Text>{touchable.txt}</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: hp(3)}}>
          <Text style={{fontWeight: 'bold'}}>Select Theatre</Text>
          <View style={style.container4}>
            {selectTheatreDatas.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    settouchable({
                      txt: item.txt,
                      txt1: item.txt1,
                      index: index,
                    })
                  }>
                  <View
                    style={[
                      style.container5,
                      {
                        ...globalStyle.makeInCenter,
                        borderColor: allcolor.bordercolor,
                        backgroundColor:
                          index === touchable.index
                            ? allcolor.theme
                            : 'transparent',
                      },
                    ]}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: wp(4),
                        color: index === touchable.index ? 'white' : 'black',
                      }}>
                      {item.txt}
                    </Text>
                    <Text
                      style={{
                        fontSize: wp(2),
                        color: index === touchable.index ? 'white' : 'black',
                      }}>
                      {item.txt1}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      <View style={style.container6}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SelectTicketScreen', {
              data: data,
              date: date,
              time: time,
              theatre: touchable,
            })
          }>
          <NextButton txt="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectTheatreScreen;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
  container1: {
    width: wp(30),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width: wp(20),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    marginLeft: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    width: wp(30),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    marginTop: hp(1),
  },
  container4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container5: {
    height: hp(8),
    width: wp(80) / 2,
    borderWidth: 1,
    borderRadius: wp(2),
    marginTop: hp(2),
  },
  container6: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: hp(3),
  },
  txtStyle: {
    fontSize: wp(2),
    fontWeight: 'bold',
  },
  txtStyle1: {
    fontSize: wp(2),
    marginLeft: wp(1),
    fontWeight: 'bold',
  },
});
