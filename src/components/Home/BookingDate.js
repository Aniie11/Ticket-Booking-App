import React from 'react';
import {View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allcolor} from '../../constants';

const BookingDate = ({month, date, day, index, onSelect}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: wp(3),
        height: hp(8),
        width: wp(14),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(2),
        backgroundColor: index === onSelect ? allcolor.theme1 : null,
        borderColor: '#a6a6a6',
      }}>
      <Text
        style={{fontSize: wp(3), color: index === onSelect ? 'white' : null}}>
        {month}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: index === onSelect ? 'white' : null,
        }}>
        {date}
      </Text>
      <Text
        style={{fontSize: wp(2), color: index === onSelect ? 'white' : null}}>
        {day}
      </Text>
    </View>
  );
};

export default BookingDate;
