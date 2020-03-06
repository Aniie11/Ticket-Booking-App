import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MovieList from '../../../components/Home/MovieList';

const Box = [
  {
    img: allImage.deadpool,
    text: 'Deadpool',
    Genres: ['Drama |', 'Action |', 'Comedy |', 'Science Fiction '],
    Director: 'David Leitch',
    cast: [
      {
        img: allImage.jack,
        name: 'Jack Kesy',
      },
      {
        img: allImage.JOSH,
        name: 'Josh Brolin',
      },
      {
        img: allImage.brianna,
        name: 'Brianna Hildebrand',
      },
      {
        img: allImage.Morena,
        name: 'Morena Baccarin',
      },
      {
        img: allImage.david,
        name: 'David Hewlett',
      },
      {
        img: allImage.doug,
        name: 'Doug Jones',
      },
      {
        img: allImage.lauren,
        name: 'Lauren Lee Smith',
      },
      {
        img: allImage.michael,
        name: 'Michael Shannon',
      },
      {
        img: allImage.nick,
        name: 'Nick Searcy',
      },
      {
        img: allImage.octavia,
        name: 'Octavia Spencer',
      },
    ],
  },
  {
    img: allImage.shapeofwater,
    text: 'The Shape of water',
    Genres: ['Love |', 'Romance |', 'Drama '],
    Director: 'Peirre Henry',
    cast: [
      {
        img: allImage.david,
        name: 'David Hewlett',
      },
      {
        img: allImage.doug,
        name: 'Doug Jones',
      },
      {
        img: allImage.lauren,
        name: 'Lauren Lee Smith',
      },
      {
        img: allImage.michael,
        name: 'Michael Shannon',
      },
      {
        img: allImage.nick,
        name: 'Nick Searcy',
      },
      {
        img: allImage.octavia,
        name: 'Octavia Spencer',
      },
      {
        img: allImage.huck,
        name: ' Huck Milner',
      },
      {
        img: allImage.jonathan,
        name: 'Jonathan Banks',
      },
      {
        img: allImage.sarah,
        name: 'Sarah Vowell',
      },
      {
        img: allImage.bob,
        name: 'Bob Odenkirk',
      },
      {
        img: allImage.brad,
        name: 'Brad Bird',
      },
      {
        img: allImage.holly,
        name: 'Holly Hunter',
      },
      {
        img: allImage.huck,
        name: ' Huck Milner',
      },
      {
        img: allImage.jonathan,
        name: 'Jonathan Banks',
      },
      {
        img: allImage.sarah,
        name: 'Sarah Vowell',
      },
    ],
  },
  {
    img: allImage.tombraider,
    text: 'Tomb Raider',
    Genres: ['Action |', 'War |', 'Thriller'],
    Director: 'Roar Uthaug',
    cast: [
      {
        img: allImage.alexandre,
        name: 'Alexandre Willaume-Jantzen',
      },
      {
        img: allImage.alicia,
        name: 'Alicia Vikander',
      },

      {
        img: allImage.antonio,
        name: 'Antonio Aakeel',
      },
      {
        img: allImage.daniel,
        name: 'Daniel Wu',
      },
      {
        img: allImage.derek,
        name: ' Derek Jacobi',
      },
      {
        img: allImage.dominic,
        name: ' Dominic West',
      },
      {
        img: allImage.hannah,
        name: 'Hannah John-Kamen',
      },
    ],
  },
  {
    img: allImage.incredible,
    text: 'Incredibles',
    Genres: ['Animation |', 'Family |', 'Adventure'],
    Director: 'Brad Bird',
    cast: [
      {
        img: allImage.bob,
        name: 'Bob Odenkirk',
      },
      {
        img: allImage.brad,
        name: 'Brad Bird',
      },
      {
        img: allImage.holly,
        name: 'Holly Hunter',
      },
      {
        img: allImage.huck,
        name: ' Huck Milner',
      },
      {
        img: allImage.jonathan,
        name: 'Jonathan Banks',
      },
      {
        img: allImage.sarah,
        name: 'Sarah Vowell',
      },
    ],
  },
  {
    img: allImage.tombraider,
    text: 'Tomb Raider',
    Genres: ['Action |', 'War |', 'Thriller'],
    Director: 'Roar Uthaug',
    cast: [
      {
        img: allImage.alexandre,
        name: 'Alexandre Willaume-Jantzen',
      },
      {
        img: allImage.alicia,
        name: 'Alicia Vikander',
      },

      {
        img: allImage.antonio,
        name: 'Antonio Aakeel',
      },
      {
        img: allImage.daniel,
        name: 'Daniel Wu',
      },
      {
        img: allImage.derek,
        name: ' Derek Jacobi',
      },
      {
        img: allImage.dominic,
        name: ' Dominic West',
      },
      {
        img: allImage.hannah,
        name: 'Hannah John-Kamen',
      },
      {
        img: allImage.bob,
        name: 'Bob Odenkirk',
      },
      {
        img: allImage.brad,
        name: 'Brad Bird',
      },
      {
        img: allImage.holly,
        name: 'Holly Hunter',
      },
      {
        img: allImage.huck,
        name: ' Huck Milner',
      },
      {
        img: allImage.jonathan,
        name: 'Jonathan Banks',
      },
      {
        img: allImage.sarah,
        name: 'Sarah Vowell',
      },
    ],
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderTop text="EAP Movies" rightIcon={allImage.user} />
      <ScrollView
        contentContainerStyle={{paddingBottom: hp(10)}}
        showsVerticalScrollIndicator={false}>
        <View style={style.container1}>
          {Box.map((item, index) => {
            return (
              <View key={index} style={{marginTop: hp(4)}}>
                <MovieList
                  buyTicket={() =>
                    navigation.navigate('TicketBookingScreen', {
                      data: {
                        img: item.img,
                        text: item.text,
                        Genres: item.Genres,
                      },
                    })
                  }
                  onPress={() =>
                    navigation.navigate('MovieDetailScreen', {
                      data: item,
                    })
                  }
                  img={item.img}
                  text={item.text}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container1: {
    flex: 1,
    paddingHorizontal: wp(6),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
