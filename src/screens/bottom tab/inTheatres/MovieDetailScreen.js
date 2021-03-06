import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
} from 'react-native';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, globalStyle} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';

const MovieDetailScreen = ({navigation, route}) => {
  // console.log(obj.route.params.data);
  const data = route.params.data;
  console.log(data.img, data.text);

  const [display, setDisplay] = useState(false);
  return (
    <View style={{flex: 1}}>
      <HeaderTop
        onpress={() => navigation.goBack(null)}
        text="EAP Movies"
        leftArrow={allImage.leftarrow}
      />

      <View style={{alignItems: 'center'}}>
        <Card>
          <View style={style.container}>
            <Image source={data.img} style={style.imgStyle} />

            <Text style={{fontWeight: 'bold', marginTop: hp(1)}}>
              {data.text}
            </Text>
          </View>
        </Card>

        <View style={[style.container1, {...globalStyle.shadow1}]} />
        <View style={[style.container2, {...globalStyle.shadow1}]} />
        <View style={style.container3} />
        <View style={style.container4} />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TicketBookingScreen', {
              data: data,
            })
          }>
          <Button
            text="Buy Tickets"
            txtOverride={{width: wp(55), marginTop: hp(3)}}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: wp(4), marginTop: hp(5)}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}> Genres:</Text>
          <Text>{data.Genres}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}> Directors:</Text>
          <Text>{data.Director}</Text>
        </View>
        <Text style={{fontWeight: 'bold'}}> Cast:</Text>
        <View style={{...globalStyle.itemInCenter}}>
          {data.cast.slice(0, 3).map((item, index) => {
            return (
              <View key={index} style={style.container8}>
                <View style={{height: hp(6)}}>
                  <Image style={style.imgStyle1} source={item.img} />
                </View>
                <View style={{width: wp(20)}}>
                  <Text style={{fontSize: wp(3), textAlign: 'center'}}>
                    {item.name}
                  </Text>
                </View>
              </View>
            );
          })}
          <TouchableOpacity onPress={() => setDisplay(true)}>
            <View style={style.container5}>
              <Image
                resizeMode="contain"
                style={{
                  height: hp(7),
                  width: wp(7),
                }}
                source={allImage.rightarrow}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={display}
        transparent={true}
        onRequestClose={() => {
          setDisplay(false);
        }}>
        <View style={style.container6}>
          <View style={style.container7}>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: hp(2),
              }}>
              All Cast
            </Text>
            <ScrollView>
              <View style={style.container9}>
                {data.cast.map((item, index) => {
                  return (
                    <View style={style.container10}>
                      <Image style={style.imgStyle2} source={item.img} />
                      <View style={{width: wp(20)}}>
                        <Text style={{textAlign: 'center'}}>{item.name}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MovieDetailScreen;

const style = StyleSheet.create({
  container: {
    height: hp(35),
    width: wp(55),
    justifyContent: 'center',
    alignItems: 'center',
  },

  container1: {
    position: 'absolute',
    height: hp(30),
    width: wp(6),
    backgroundColor: 'white',
    left: wp(18),
    borderRadius: wp(4),
    marginTop: hp(5),
  },
  container2: {
    position: 'absolute',
    height: hp(30),
    width: wp(6),
    backgroundColor: 'white',
    right: wp(18),
    borderRadius: wp(4),
    marginTop: hp(5),
  },
  container3: {
    position: 'absolute',
    height: hp(25),
    width: wp(6),
    backgroundColor: 'white',
    right: wp(15),
    borderRadius: wp(4),
    marginTop: hp(8),
  },
  container4: {
    position: 'absolute',
    height: hp(25),
    width: wp(6),
    backgroundColor: 'white',
    left: wp(15),
    borderRadius: wp(4),
    marginTop: hp(8),
  },
  container5: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(3),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(2),
  },
  container6: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container7: {
    height: hp(80),
    backgroundColor: 'white',
    width: wp(90),
    borderRadius: wp(3),
  },
  container8: {
    marginRight: wp(3),
    marginTop: hp(2),
    alignItems: 'center',

    height: hp(10),
  },
  container9: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: wp(5),
  },
  container10: {
    marginTop: hp(3),

    width: wp(80) / 3,
    alignItems: 'center',
  },
  imgStyle: {
    height: hp(28),
    width: wp(45),
    borderRadius: wp(3),
  },
  imgStyle1: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(5),
  },
  imgStyle2: {
    height: wp(20),
    width: wp(20),
    borderRadius: wp(10),
  },
});
