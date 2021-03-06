import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTop from '../../../components/Header/HeaderTop';
import NextButton from '../../../components/Button/NextButton';
import {allColor, allImage, globalStyle} from '../../../constants';

const ticketArr = [
  'G1',
  'G2',
  'G3',
  'G4',
  'G5',
  'G6',
  'G7',
  'G8',
  'G9',
  'G10',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'E1',
  'E2',
  'E3',
  'E4',
  'E5',
  'E6',
  'E7',
  'E8',
  'E9',
  'E10',
  'D1',
  'D2',
  'D3',
  'D4',
  'D5',
  'D6',
  'D7',
  'D8',
  'D9',
  'D10',
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C8',
  'C9',
  'C10',
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B8',
  'B9',
  'B10',
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
  'A7',
  'A8',
  'A9',
  'A10',
];
const data1 = ['G', 'F', 'E', 'D', 'C', 'B', 'A'];
const spaceArr = [2, 6, 12, 16, 22, 26, 32, 36, 42, 46, 52, 56, 62, 66];

let seat = [];
const SelectSeatScreen = ({navigation, route}) => {
  const data = route.params.data;

  const date = route.params.date;
  const time = route.params.time;
  const theatre = route.params.theatre;
  const total = route.params.total;

  const [selectedSeat, setSelectedSeat] = useState([]);

  const [preselectIndex, setPreselectIndex] = useState([14, 20]);
  const onpress = () => {
    console.log(index, 'Index external');
    if (selectedSeat.includes(index)) {
      let arr = [];
      arr = [...selectedSeat];
      console.log(index, 'Index internal');
      // console.log(arr, 'Seat');
      arr.splice(index, 1);
      console.log(arr, 'Seat spliced');
      setSelectedSeat(arr);
    } else {
      seat = [...selectedSeat];
      seat.push(index);
      setSelectedSeat(seat);
    }
  };

  return (
    <View style={{flex: 1}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="Buy Tickets"
        leftArrow={allImage.leftarrow}
      />
      <View style={{paddingHorizontal: wp(5)}}>
        <View style={{...globalStyle.rowSpace}}>
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
              <View style={style.container}>
                <View
                  style={{
                    ...globalStyle.itemInCenter,
                  }}>
                  <Text style={style.txtStyle1}>{date.day}</Text>
                  <Text style={style.txtStyle}>{date.month}</Text>
                  <Text style={style.txtStyle}>{date.date}</Text>
                </View>
              </View>

              <View style={style.container1}>
                <Text style={style.txtStyle1}>{time}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: hp(1)}}>
              <View style={style.container2}>
                <Text>{theatre.txt}</Text>
              </View>
              <View style={style.container3}>
                <Text style={style.txtStyle2}>{total} Tickets</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: hp(5)}}>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>SCREEN</Text>
      </View>
      {/* .......................................................*/}
      <View style={{flex: 1}}>
        <View style={style.container7}>
          <View>
            {data1.map((item, index) => {
              return (
                <View key={index} style={style.container6}>
                  <Text style={style.txtStyle2}>{item}</Text>
                </View>
              );
            })}
          </View>
          <View style={style.container8}>
            {ticketArr.map((item, index) => {
              if (
                index === 0 ||
                index === 9 ||
                (index >= 9 && index < 62) ||
                index >= 68
              ) {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={onpress}
                    style={[
                      style.container9,
                      {
                        ...globalStyle.makeInCenter,
                        marginRight: spaceArr.includes(index) ? wp(4) : wp(1),
                        marginBottom: hp(1),
                        backgroundColor: selectedSeat.includes(index)
                          ? allColor.theme
                          : preselectIndex.includes(index)
                          ? allColor.theme
                          : 'transparent',
                        borderColor: allColor.borderColor,
                      },
                    ]}>
                    <Text
                      style={{
                        fontSize: wp(3),
                        color: selectedSeat.includes(index) ? 'white' : 'black',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <View
                    style={{
                      height: wp(7),
                      width: wp(7),
                      marginRight: spaceArr.includes(index) ? wp(4) : wp(1),
                    }}></View>
                );
              }
            })}
          </View>
          <View>
            {data1.map((item, index) => {
              return (
                <View key={index} style={style.container10}>
                  <Text style={style.txtStyle2}>{item}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>

      {/* .......................................................*/}
      <View style={{alignItems: 'center', marginTop: hp(5)}}>
        <View style={[style.container5, {borderColor: allColor.borderColor}]}>
          <Text style={{fontWeight: 'bold', fontSize: wp(5)}}>RS.4050.00</Text>
          <Text style={{fontWeight: 'bold', fontSize: wp(3)}}>
            Total Amount Payable
          </Text>
        </View>
      </View>
      <View style={style.container11}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PaymentScreen', {
              data: data,
              date: date,
              time: time,
              theatre: theatre,
              total: total,
            })
          }>
          <NextButton txt="Next" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectSeatScreen;

const style = StyleSheet.create({
  container: {
    width: wp(30),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    width: wp(20),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    marginLeft: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width: wp(30),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    width: wp(20),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    marginLeft: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container4: {
    flexDirection: 'row',

    paddingHorizontal: wp(5),
    justifyContent: 'space-between',

    alignItems: 'center',
    marginTop: hp(3),
  },
  container5: {
    height: hp(8),
    width: wp(50),
    borderWidth: 1,
    marginTop: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
  },
  container6: {
    marginBottom: hp(1),
    width: wp(7),
    height: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container7: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container8: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp(87),
  },
  container9: {
    height: wp(7),
    width: wp(7),
    borderWidth: 1,
    borderRadius: wp(1),
  },
  container10: {
    marginBottom: hp(1),
    width: wp(7),
    height: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container11: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: hp(5),
  },
  txtStyle: {
    fontSize: wp(2),
    fontWeight: 'bold',
    marginLeft: wp(1),
  },
  txtStyle1: {
    fontSize: wp(2),
    fontWeight: 'bold',
  },
  txtStyle2: {fontSize: wp(3), fontWeight: 'bold'},
});
