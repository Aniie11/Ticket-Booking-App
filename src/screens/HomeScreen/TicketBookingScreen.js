import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import HeaderTop from '../../components/Header/HeaderTop';
import {allImage, allcolor} from '../../constants';
import BookingDate from '../../components/Home/BookingDate';
import Button1 from '../../components/Button/Button1';

const date = [
  {month: 'MAR', date: '09', day: 'FRIDAY'},
  {month: 'MAR', date: '09', day: 'FRIDAY'},
  {month: 'MAR', date: '10', day: 'SATDAY'},
  {month: 'MAR', date: '11', day: 'SUNDAY'},
  {month: 'MAR', date: '12', day: 'MONDAY'},
  {month: 'MAR', date: '13', day: 'TUEDAY'},
  {month: 'MAR', date: '14', day: 'WEDDAY'},
  {month: 'MAR', date: '15', day: 'THURSDAY'},
  {month: 'MAR', date: '16', day: 'FRIDAY'},
  {month: 'MAR', date: '17', day: 'SATDAY'},
  {month: 'MAR', date: '18', day: 'SUNDAY'},
  {month: 'MAR', date: '19', day: 'MONDAY'},
  {month: 'MAR', date: '20', day: 'TUEDAY'},
];

const time = ['10:30 AM', '1:30 AM', '4:15 PM', '7:00 PM', '10:00 PM'];

const TicketBookingScreen = ({navigation, route}) => {
  const data = route.params.data;

  const [touchable, settouchable] = useState({
    month: '',
    date: '',
    day: '',
    index: '',
  });
  const [touch, settouch] = useState({
    selectedTime: '',
    index: '',
  });

  console.warn(touchable);

  return (
    <View style={{flex: 1}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="Buy Tickets"
        leftIcon={allImage.leftarrow}
      />
      <View
        style={{
          paddingHorizontal: wp(4),
          marginTop: hp(4),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image style={{height: hp(15), width: wp(30)}} source={data.img} />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: wp(4)}}>
              {data.text}
            </Text>
            <Text style={{fontSize: wp(2)}}>{data.Genres}</Text>
            <View style={{flexDirection: 'row', marginTop: hp(2)}}>
              <View
                style={{
                  width: wp(35),
                  height: hp(4),
                  borderWidth: 1,
                  borderRadius: wp(15),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text style={{fontSize: wp(3)}}>{touchable.day}</Text>
                  <Text style={{fontSize: wp(3), marginLeft: wp(1)}}>
                    {touchable.month}
                  </Text>
                  <Text style={{fontSize: wp(3), marginLeft: wp(1)}}>
                    {touchable.date}
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
                <Text style={{fontSize: wp(3)}}>{touch.selectedTime} </Text>
              </View>
            </View>
          </View>
        </View>
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
                    settouchable({
                      month: item.month,
                      date: item.date,
                      day: item.day,
                      index: index,
                    });
                  }}>
                  <View
                    style={{
                      width: wp(92) / 5,
                      alignItems: 'center',
                    }}>
                    <BookingDate
                      index={index}
                      onSelect={touchable.index}
                      month={item.month}
                      date={item.date}
                      day={item.day}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={{marginTop: hp(3)}}>
          <Text>Select Show Time</Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {time.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    settouch({
                      selectedTime: item,
                      index: index,
                    })
                  }>
                  <View
                    style={{
                      width: wp(85) / 3,
                      height: hp(4),
                      borderWidth: 1,
                      borderRadius: wp(2),
                      justifyContent: 'center',
                      alignItems: 'center',

                      marginTop: hp(1),
                      marginLeft: wp(2),
                      backgroundColor:
                        index === touch.index ? allcolor.theme1 : null,
                      borderColor: allcolor.borderColour,
                    }}>
                    <Text
                      style={{color: index === touch.index ? 'white' : null}}>
                      {item}
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
          marginBottom: hp(5),
        }}>
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
          <Button1 txt="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketBookingScreen;
