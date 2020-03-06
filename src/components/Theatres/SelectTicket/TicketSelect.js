import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allcolor} from '../../../constants';

const datas = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
];
const TicketSelect = ({txt, selectedTicket, selectTicket}) => {
  return (
    <View style={style.container}>
      <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: wp(4)}}>
        {txt}
      </Text>
      <View style={style.container1}>
        {datas.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => selectTicket({item: item, index: index})}>
              <View
                style={[
                  style.container2,
                  {
                    backgroundColor:
                      index === selectedTicket.index ? allcolor.theme : null,
                    borderColor: allcolor.borderColour,
                  },
                ]}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: index === selectedTicket.index ? 'white' : null,
                  }}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TicketSelect;

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: hp(30),
    width: wp(43),
    borderRadius: wp(2),
    padding: wp(1),
    borderColor: allcolor.borderColour,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container2: {
    height: hp(4),
    width: wp(12),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(1),

    borderRadius: wp(2),
  },
});
