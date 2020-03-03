import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage, allcolor} from '../../../constants';
import Card from '../../../components/Card/Card';
import Button1 from '../../../components/Button/Button1';
import Button from '../../../components/Button/Button';

const Movies = [
  {
    img: allImage.blackpanther,

    txt: "Black Panther' review ",

    txt1:
      "Black Panther follows T'Challa who, after the events of Captain America: Civil War, returns home to the isolated, technologically advanced African nation of Wakanda to take his place as King. However, when an old enemy reappears on the radar, T'Challa's mettle as King and Black Panther is tested when he is drawn into a conflict that puts the entire fate of Wakanda and the world at risk.",
    Genre: ['Action & Adventure ', 'Drama ', 'Science Fiction ', 'Fantasy'],
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
  {
    img: allImage.starwar,
    txt: "Star War' review",

    txt1:
      'The battle between the Jedi and the Sith comes to a thrilling conclusion in this final chapter of the Skywalker Saga. A year following the events of The Last Jedi, the remaining members of the Resistance are forced to confront their past while taking on the First Order one more time.',
    Genre: ['Action & Adventure ', 'Drama ', 'Science Fiction ', 'Fantasy'],
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
    img: allImage.justiceleague,
    txt: "Justice League' review",

    txt1:
      "Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy. Together, Batman and Wonder Woman work quickly to find and recruit a team of metahumans to stand against this newly awakened threat. But despite the formation of this unprecedented league of heroes--Batman, Wonder Woman, Aquaman, Cyborg and The Flash--it may already be too late to save the planet from an assault of catastrophic proportions.",
    Genre: ['Action & Adventure ', 'Drama ', 'Science Fiction ', 'Fantasy'],
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
    txt: "Incredible2' review",

    txt1:
      'The battle between the Jedi and the Sith comes to a thrilling conclusion in this final chapter of the Skywalker Saga. A year following the events of The Last Jedi, the remaining members of the Resistance are forced to confront their past while taking on the First Order one more time.',
    Genre: ['Action & Adventure ', 'Drama ', 'Science Fiction ', 'Fantasy'],
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
];

const NewScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderTop text="EAP Movies" rightIcon={allImage.user} />
      <ScrollView contentContainerStyle={{paddingBottom: hp(10)}}>
        <View style={{paddingHorizontal: wp(0)}}>
          {Movies.map((item, index) => {
            return (
              <Card>
                <View
                  key={index}
                  style={{height: hp(30), flexDirection: 'row'}}>
                  <Image
                    style={{
                      height: hp(30),
                      width: wp(35),
                      borderTopLeftRadius: wp(4),
                      borderBottomLeftRadius: wp(4),
                    }}
                    source={item.img}
                  />

                  <View
                    style={{
                      flexShrink: 1,
                      paddingHorizontal: wp(2),
                      marginTop: hp(2),
                    }}>
                    <Text style={{fontSize: wp(4), fontWeight: 'bold'}}>
                      {item.txt}
                    </Text>

                    <Text
                      numberOfLines={5}
                      style={{fontSize: wp(3), textAlign: 'justify'}}>
                      {item.txt1}
                    </Text>
                    <View
                      style={{
                        justifyContent: 'flex-end',
                        flex: 1,
                        marginBottom: hp(2),
                        alignItems: 'flex-end',
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('NewsReviewScreen', {
                            data: item,
                          })
                        }>
                        <Button1 txt="Read More" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewScreen;
