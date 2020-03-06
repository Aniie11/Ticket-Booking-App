import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NextButton from '../../../components/Button/NextButton';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, allcolor} from '../../../constants';

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
        leftIcon={allImage.leftarrow}
      />
      <View style={{paddingHorizontal: wp(5)}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image style={{height: hp(15), width: wp(30)}} source={data.img} />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: wp(4)}}>
              {data.text}
            </Text>
            <Text style={{fontSize: wp(2)}}>{data.Genres}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: hp(1),
              }}>
              <View
                style={{
                  width: wp(30),
                  height: hp(4),
                  borderWidth: 1,
                  borderRadius: wp(15),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: wp(2), fontWeight: 'bold'}}>
                    {date.day}
                  </Text>
                  <Text
                    style={{
                      fontSize: wp(2),
                      marginLeft: wp(1),
                      fontWeight: 'bold',
                    }}>
                    {date.month}
                  </Text>
                  <Text
                    style={{
                      fontSize: wp(2),
                      marginLeft: wp(1),
                      fontWeight: 'bold',
                    }}>
                    {date.date}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: wp(20),
                  height: hp(4),
                  borderWidth: 1,
                  borderRadius: wp(15),
                  marginLeft: wp(3),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: wp(2), fontWeight: 'bold'}}>
                  {time}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: wp(30),
                height: hp(4),
                borderWidth: 1,
                borderRadius: wp(15),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: hp(1),
              }}>
              <Text>{touchable.txt}</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: hp(3)}}>
          <Text style={{fontWeight: 'bold'}}>Select Theatre</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
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
                    style={{
                      height: hp(8),
                      width: wp(80) / 2,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: allcolor.bordercolor,
                      borderRadius: wp(2),
                      marginTop: hp(2),
                      backgroundColor:
                        index === touchable.index ? allcolor.theme : null,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: wp(4),
                        color: index === touchable.index ? 'white' : null,
                      }}>
                      {item.txt}
                    </Text>
                    <Text
                      style={{
                        fontSize: wp(2),
                        color: index === touchable.index ? 'white' : null,
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

      <View
        style={{
          flex: 1,
          alignItems: 'center',

          justifyContent: 'flex-end',
          marginBottom: hp(3),
        }}>
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
