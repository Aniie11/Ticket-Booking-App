import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../Button/Button';

const MovieList = ({img, text, onPress, buyTicket}) => {
  return (
    <View
      style={{
        height: hp(40),
        width: wp(42),
      }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={{
            height: hp(30),
            width: wp(40),
            borderRadius: wp(5),
          }}
          source={img}
        />
      </TouchableOpacity>
      <Text style={{textAlign: 'center', marginTop: hp(2), fontWeight: 'bold'}}>
        {text}
      </Text>
      <TouchableOpacity onPress={buyTicket}>
        <Button
          text="Buy Tickets"
          txtOverride={{marginTop: hp(1), height: hp(5)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MovieList;
