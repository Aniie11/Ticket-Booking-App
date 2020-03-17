import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, allColor} from '../../../constants';

import NextButton from '../../../components/Button/NextButton';
import moment from 'moment';

const date = [
  {month: 'MAR', date: '08', day: 'FRIDAY'},
  {month: 'MAR', date: '09', day: 'FRIDAY'},
  {month: 'MAR', date: '10', day: 'SATURDAY'},
  {month: 'MAR', date: '11', day: 'SUNDAY'},
  {month: 'MAR', date: '12', day: 'MONDAY'},
  {month: 'MAR', date: '13', day: 'TUESDAY'},
  {month: 'MAR', date: '14', day: 'WEDNESDAY'},
  {month: 'MAR', date: '15', day: 'THURSDAY'},
  {month: 'MAR', date: '16', day: 'FRIDAY'},
  {month: 'MAR', date: '17', day: 'SATURDAY'},
  {month: 'MAR', date: '18', day: 'SUNDAY'},
  {month: 'MAR', date: '19', day: 'MONDAY'},
  {month: 'MAR', date: '20', day: 'TUESDAY'},
];

const time = ['10:30 AM', '1:30 AM', '4:15 PM', '7:00 PM', '10:00 PM'];

const TicketBookingScreen = ({navigation, route}) => {
  const data = route.params.data;

  const [touchable, setTouchable] = useState({
    month: '',
    date: '',
    day: '',
    index: '',
  });
  const [touch, setTouch] = useState({
    selectedTime: '',
    index: '',
  });

  const [month, setMonth] = useState(moment(new Date()).format('MMMM DD YYYY'));
  const [showTime, setShowTime] = useState(moment(new Date()).format('LT'));

  return (
    <View style={{flex: 1, paddingHorizontal: wp(4)}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="Buy Tickets"
        leftArrow={allImage.leftarrow}
      />

      <View style={style.container}>
        <Image style={{height: hp(15), width: wp(30)}} source={data.img} />
        <View>
          <Text style={{fontWeight: 'bold', fontSize: wp(4)}}>{data.text}</Text>
          <Text style={{fontSize: wp(2)}}>{data.Genres}</Text>
          <View style={{flexDirection: 'row', marginTop: hp(2)}}>
            <View style={style.container1}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: wp(3), fontWeight: 'bold'}}>
                  {touchable.day}
                </Text>

                <Text style={style.txtStyle}>
                  {month}
                  {touchable.month}
                </Text>

                <Text style={style.txtStyle}>{touchable.date}</Text>
              </View>
            </View>

            <View style={style.container2}>
              <Text style={{fontSize: wp(3), fontWeight: 'bold'}}>
                {showTime} {touch.selectedTime}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* ...........................................................................................................................................*/}

      <View style={{marginTop: hp(2)}}>
        <Text>Select Date</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {date.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setMonth(false);
                  setTouchable({
                    month: item.month,
                    date: item.date,
                    day: item.day,
                    index: index,
                  });
                }}>
                <View
                  style={[
                    style.container3,
                    {
                      backgroundColor:
                        index === touchable.index
                          ? allColor.theme
                          : 'transparent',
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: wp(3),
                      color: index === touchable.index ? 'white' : 'black',
                    }}>
                    {item.month}
                  </Text>
                  <Text
                    style={{
                      fontSize: wp(3),
                      fontWeight: 'bold',
                      color: index === touchable.index ? 'white' : 'black',
                    }}>
                    {item.date}
                  </Text>
                  <Text
                    style={{
                      fontSize: wp(2),

                      color: index === touchable.index ? 'white' : 'black',
                    }}>
                    {item.day}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={{marginTop: hp(2)}}>Select Show Time</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {time.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setShowTime(false);
                  setTouch({
                    selectedTime: item,
                    index: index,
                  });
                }}>
                <View
                  style={[
                    style.container4,
                    {
                      backgroundColor:
                        index === touch.index ? allColor.theme : 'transparent',
                    },
                  ]}>
                  <Text
                    style={{
                      fontSize: wp(3),
                      color: index === touch.index ? 'white' : 'black',
                    }}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/*......................................................................................................................................................... */}
      <View style={style.container5}>
        <TouchableOpacity
          onPress={() => {
            if (touchable.month !== '' && touch.selectedTime !== '') {
              navigation.navigate('SelectTheatreScreen', {
                data: data,
                date: touchable,
                time: touch.selectedTime,
              });
            } else if (touchable.month === '' && touch.selectedTime === '') {
              alert('Please fill date and time ');
            } else if (touchable.month !== '') {
              alert('Please fill time');
            } else if (touch.selectedTime !== '') {
              alert('Please fill date');
            }
          }}>
          <NextButton txt="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketBookingScreen;
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },
  container1: {
    width: wp(35),
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
    borderWidth: 1,
    borderRadius: wp(3),
    height: hp(8),
    width: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
    borderColor: '#a6a6a6',
    marginLeft: wp(3),
  },
  container4: {
    borderWidth: 1,
    borderRadius: wp(3),
    height: hp(4),
    width: wp(80) / 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),
    borderColor: '#a6a6a6',
    marginLeft: wp(3),
  },
  container5: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: hp(5),
  },
  txtStyle: {
    fontSize: wp(3),
    marginLeft: wp(1),
    fontWeight: 'bold',
  },
});
