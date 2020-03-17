import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, allColor, globalStyle} from '../../../constants';
import Card from '../../../components/Card/Card';
import InputText from '../../../components/InputText/InputText';

const PaymentScreen = ({navigation, route}) => {
  const data = route.params.data;
  const date = route.params.date;
  const time = route.params.time;
  const theatre = route.params.theatre;
  const total = route.params.total;
  const [touch, setTouch] = useState();
  const [touchable, setTouchable] = useState();
  const [display, setDisplay] = useState();
  const [display1, setDisplay1] = useState();
  const [firstName, setfirstName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const [lastName, setlastName] = useState();

  return (
    <View style={{flex: 1}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="Confirm & Pay"
        leftArrow={allImage.leftarrow}
      />
      <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
        <Card>
          <View style={style.container} />
          <View style={style.container1} />
          <View style={{paddingHorizontal: wp(4)}}>
            <View style={{...globalStyle.rowSpace}}>
              <InputText
                onChangeUpdateText={val => setfirstName(val)}
                text="First Name"
                text1="Enter First Name"
                txtInputOverride={{width: wp(38)}}
              />
              <InputText
                onChangeUpdateText={val => setlastName(val)}
                text="Last Name"
                text1="Enter First Name"
                txtInputOverride={{width: wp(38)}}
              />
            </View>
            <InputText
              onChangeUpdateText={val => setNumber(val)}
              text="Mobile"
              text1="Enter Mobile Number"
            />
            <InputText
              onChangeUpdateText={val => setEmail(val)}
              text="Email"
              text1="abc@gmail.com"
            />

            <View style={style.container2}>
              <TouchableOpacity onPress={() => setDisplay(!display)}>
                <View
                  style={[
                    style.container3,
                    {
                      backgroundColor: display
                        ? allColor.circleColor
                        : 'transparent',
                      borderColor: allColor.circleColor,
                    },
                  ]}>
                  {display === true ? (
                    <View>
                      <Image
                        resizeMode="center"
                        style={style.imgStyle1}
                        source={allImage.tick}
                      />
                    </View>
                  ) : null}
                </View>
              </TouchableOpacity>
              <Text style={{marginLeft: wp(5), fontSize: wp(3)}}>
                I Agree to Terms & Conditions
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: hp(2),
                justifyContent: 'space-between',
              }}>
              {[...new Array(40)].map(() => {
                return (
                  <View>
                    <Text
                      style={{
                        color: allColor.borderColor,
                        marginRight: wp(1),
                      }}>
                      -
                    </Text>
                  </View>
                );
              })}
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}}>Booking Details</Text>
              <View style={style.container4}>
                <Image
                  style={{height: hp(15), width: wp(25)}}
                  source={data.img}
                />
                <View style={{marginLeft: wp(3)}}>
                  <Text style={{fontWeight: 'bold', fontSize: wp(4)}}>
                    {data.text}
                  </Text>
                  <Text style={{fontSize: wp(2)}}>{data.Genres}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: hp(1),
                    }}>
                    <View style={style.container5}>
                      <View
                        style={{
                          ...globalStyle.itemInCenter,
                        }}>
                        <Text style={style.txtStyle1}>{date.day}</Text>
                        <Text style={style.txtStyle}>{date.month}</Text>
                        <Text style={style.txtStyle}>{date.date}</Text>
                      </View>
                    </View>

                    <View style={style.container6}>
                      <Text style={style.txtStyle1}>{time}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: hp(1)}}>
                    <View style={style.container7}>
                      <Text style={style.txtStyle1}>{theatre.txt}</Text>
                    </View>
                    <View style={style.container8}>
                      <Text style={style.txtStyle1}>{total} Tickets</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={style.container9}>
                <Text>Total Amount Payable:</Text>
                <Text style={{fontWeight: 'bold', fontSize: wp(5)}}>
                  Rs.4050.00
                </Text>
              </View>
              <View style={{...globalStyle.rowSpace}}>
                {[...new Array(40)].map(() => {
                  return (
                    <View>
                      <Text
                        style={{
                          color: allColor.borderColor,
                          marginRight: wp(1),
                        }}>
                        -
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={style.container10}>
              <TouchableOpacity onPress={() => setDisplay1(!display1)}>
                <View
                  style={[
                    style.container11,
                    {
                      borderColor: allColor.circleColor,
                      backgroundColor: display1 ? '#00DE51' : 'transparent',
                    },
                  ]}>
                  {display1 === true ? (
                    <Image
                      resizeMode="center"
                      style={style.imgStyle2}
                      source={allImage.tick}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
              <Text style={{fontSize: wp(3)}}>
                Pay buy Credit Card, Visa or Master
              </Text>
              <Image
                resizeMode="contain"
                style={style.imgStyle}
                source={allImage.visa}
              />
              <Image
                resizeMode="contain"
                style={style.imgStyle}
                source={allImage.mastercard}
              />
            </View>
          </View>
        </Card>
        <View style={{alignItems: 'center', marginTop: hp(2)}}>
          <View style={{...globalStyle.itemInCenter}}>
            <Text style={{fontSize: wp(3)}}>You have</Text>
            <Text
              style={{
                fontSize: wp(3),
                fontWeight: 'bold',
                color: allColor.theme,
              }}>
              300
            </Text>
            <Text style={{fontSize: wp(3)}}>
              seconds to complete this booking
            </Text>
          </View>
        </View>
        <View style={style.container12}>
          <TouchableOpacity
            onPress={() => {
              setTouch(!touch);
              navigation.goBack(null);
            }}>
            <View
              style={[
                style.container13,
                {
                  backgroundColor: touch ? allColor.theme : null,
                  borderColor: allColor.borderColor,
                },
              ]}>
              <Text style={{color: touch ? 'white' : null}}>Back</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTouchable(!touchable)}>
            <View
              style={[
                style.container14,
                {
                  backgroundColor: touchable ? allColor.theme : null,
                  borderColor: allColor.borderColor,
                },
              ]}>
              <Text style={{color: touchable ? 'white' : null}}>Pay Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    height: wp(7),
    width: wp(7),
    borderRadius: wp(5),
    backgroundColor: '#f2f2f2',
    top: hp(40),
    left: wp(-4),
  },
  container1: {
    position: 'absolute',
    height: wp(7),
    width: wp(7),
    borderRadius: wp(5),
    backgroundColor: '#f2f2f2',
    top: hp(40),
    right: wp(-4),
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(3),
  },
  container3: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(3),

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  container5: {
    width: wp(30),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container6: {
    width: wp(20),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    marginLeft: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container7: {
    width: wp(30),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container8: {
    width: wp(20),
    height: hp(4),
    borderWidth: 1,
    borderRadius: wp(15),
    marginLeft: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container9: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
  },
  container10: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container11: {
    height: wp(7),
    width: wp(7),
    borderRadius: wp(15),

    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginTop: hp(5),
  },
  container13: {
    width: wp(45),
    height: hp(5),
    borderWidth: 1,
    borderRadius: wp(3),

    justifyContent: 'center',
    alignItems: 'center',
  },
  container14: {
    width: wp(45),
    height: hp(5),
    borderWidth: 1,
    borderRadius: wp(3),

    justifyContent: 'center',
    alignItems: 'center',
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
  imgStyle: {
    height: hp(7),
    width: wp(7),
    borderRadius: wp(2),
  },
  imgStyle1: {
    height: hp(3),
    width: wp(3),
    tintColor: 'white',
  },
  imgStyle2: {height: hp(5), width: wp(5), tintColor: 'white'},
});
