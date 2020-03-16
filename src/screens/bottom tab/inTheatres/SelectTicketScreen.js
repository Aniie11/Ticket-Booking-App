import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, allcolor, globalStyle} from '../../../constants';
import TicketSelect from '../../../components/Theatres/SelectTicket/TicketSelect';
import NextButton from '../../../components/Button/NextButton';

const selectSeat = [
  {
    text: 'Gold Class',
    text1: 'Full. 830.00/ Half. 730.00',
  },
  {
    text: 'ODC',
    text1: 'Full. 650.00/ Half. 600.00',
  },
  {
    text: 'BOX',
    text1: 'Full. 1600.00',
  },
];

const SelectTicketScreen = ({navigation, route}) => {
  const data = route.params.data;
  const date = route.params.date;
  const time = route.params.time;
  const theatre = route.params.theatre;
  const [touch, setTouch] = useState();

  const [total, setTotal] = useState();
  const [halfT, setHalfT] = useState({
    item: '',
    index: '',
  });
  const [fullT, setFullT] = useState({
    item: '',
    index: '',
  });

  const selectTicket2 = item => {
    setHalfT({
      item: item.item,
      index: item.index,
    });
    if (fullT.item !== '') {
      let total = parseInt(item.item) + parseInt(fullT.item);
      setTotal(total);
    } else {
      setTotal(item.item);
    }
  };

  const selectTicket1 = item => {
    setFullT({
      item: item.item,
      index: item.index,
    });
    if (halfT.item !== '') {
      let total = parseInt(item.item) + parseInt(fullT.item);
      setTotal(total);
    } else {
      setTotal(item.item);
    }
  };

  return (
    <View style={{flex: 1}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="Buy Tickets"
        leftArrow={allImage.leftarrow}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp(5)}}>
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
                  <View style={{...globalStyle.itemInCenter}}>
                    <Text style={{fontSize: wp(2), fontWeight: 'bold'}}>
                      {date.day}
                    </Text>
                    <Text style={style.txtStyle}>{date.month}</Text>
                    <Text style={style.txtStyle}>{date.date}</Text>
                  </View>
                </View>

                <View style={style.container1}>
                  <Text style={{fontWeight: 'bold', fontSize: wp(3)}}>
                    {time}
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: hp(1)}}>
                <View style={style.container2}>
                  <Text>{theatre.txt}</Text>
                </View>
                <View style={style.container3}>
                  <Text style={{fontSize: wp(3), fontWeight: 'bold'}}>
                    {total} Tickets
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: hp(3)}}>
            <Text>How Many Tickets</Text>
            <View style={style.container6}>
              <TicketSelect
                selectTicket={selectTicket1}
                selectedTicket={fullT}
                txt="Full Tickets"
              />
              <TicketSelect
                selectTicket={selectTicket2}
                selectedTicket={halfT}
                txt="Half Tickets"
              />
            </View>
          </View>
          <View style={{marginTop: hp(3)}}>
            <Text>Select Seat Type</Text>
            <View style={style.container7}>
              {selectSeat.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => setTouch(index)}>
                    <View
                      style={[
                        style.container5,
                        {
                          backgroundColor:
                            index === touch ? allcolor.theme : null,
                          borderColor: allcolor.bordercolor,
                        },
                      ]}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: wp(4),
                          color: index === touch ? 'white' : null,
                        }}>
                        {item.text}
                      </Text>
                      <Text
                        style={{
                          fontSize: wp(2),
                          color: index === touch ? 'white' : null,
                        }}>
                        {item.text}
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
            alignItems: 'center',
            marginTop: hp(4),
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SelectSeatScreen', {
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
      </ScrollView>
    </View>
  );
};

export default SelectTicketScreen;
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
  container5: {
    borderWidth: 1,

    height: hp(8),
    width: wp(40),
    borderRadius: wp(2),
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container6: {
    flexDirection: 'row',
    marginTop: hp(2),
    justifyContent: 'space-between',
  },
  container7: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  txtStyle: {
    fontSize: wp(2),
    fontWeight: 'bold',
    marginLeft: wp(1),
  },
});
