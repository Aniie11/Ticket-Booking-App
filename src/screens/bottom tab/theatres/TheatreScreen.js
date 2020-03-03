import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage} from '../../../constants';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TheatreScreenComponent from '../../../components/Theatres/TheatreScreenComponent';
import Card from '../../../components/Card/Card';

const movieHall = [
  {
    img: allImage.hall,
    txt: 'Savoy Premier',
    txt1: 'Ramkrishna Road',
    txt2: '+94 11 744 6223',
    txt3: 'savoy@eapmovies.com',
    id: '1',
  },
  {
    img: allImage.hall1,
    txt: 'Savoy3D-Wellawatte',
    txt1: 'No.12,Savoy Building,Colombo 6',
    txt2: '+94 11 744 6223',
    txt3: 'savoymanager@eapmovies.com',
    id: '2',
  },
  {
    img: allImage.hall2,
    txt: 'Excel 3D -Colombo 10',
    txt1: 'Node.338,T.B,Jayah Mawath',
    txt2: '+94 11 744 6223',
    txt3: 'excelcinema@eapmovies.com',
    id: '3',
  },
  {
    img: allImage.hall3,
    txt: 'Tower -Moratuwa',
    txt1: 'No.670,Galle Road',
    txt2: '+94 11 744 6223',
    txt3: 'tower@eapmovies.com',
    id: '4',
  },
];
const TheatreScreen = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderTop text="EAP Movies" rightIcon={allImage.user} />

      <FlatList
        contentContainerStyle={{paddingBottom: hp(15)}} //ali scrolll garauxa (scroll navako bela)
        showsVerticalScrollIndicator={false}
        data={movieHall}
        renderItem={({item}) => (
          <TheatreScreenComponent
            img={item.img}
            txt1={item.txt1}
            txt2={item.txt2}
            txt3={item.txt3}
            txt={item.txt}
          />
        )}
      />
    </View>
  );
};

export default TheatreScreen;
