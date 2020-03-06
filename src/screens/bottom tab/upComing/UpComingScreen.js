import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTop from '../../../components/Header/HeaderTop';
import {allImage} from '../../../constants';

const Movie = [
  {
    text: 'Aquaman',
    img: allImage.aquaman,
    text1:
      'From Warner Bros. Pictures and director James Wan comes an action-packed adventure that spans the vast, visually breathtaking underwater world of the seven seas, "Aquaman," starring Jason Momoa in the title role. The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime--one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be... a king.',

    Genre: ['Action & Adventure |', 'Science Fiction |', 'Fantasy'],
  },
  {
    text: 'Avengers',
    img: allImage.avengers,
    text1:
      'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios',
    Genre: ['Action & Adventure |', ' Drama', 'Science Fiction & Fantasy'],
  },
  {
    text: 'Rampage',
    img: allImage.rampage,
    text1:
      'Primatologist Davis Okoye (Johnson), a man who keeps people at a distance, shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth. But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size. To make matters worse, soon discovered there are other similarly altered animals. As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.',
    Genre: ['Action & Adventure', 'Drama', 'Science Fiction & Fantasy'],
  },
  {
    text: 'A Wrinke in Time',
    img: allImage.wrinkeintime,
    text1:
      'Meg Murry (Storm Reid) is a typical middle school student struggling with issues of self-worth who is desperate to fit in.As the daughter of two world-renowned physicists, she is intelligent and uniquely gifted, as is Meg younger brother Charles Wallace (Deric McCabe), but she has yet to realize it for herself. Making matters even worse is the baffling disappearance of Mr. Murry (Chris Pine), which torments Meg and has left her mother (Gugu Mbatha-Raw) heartbroken.',
    Genre: [
      'Action & Adventure',
      'Drama',
      'Kids & Family',
      ' Science Fiction & Fantasy',
    ],
  },
];
const UpComingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderTop text="EAP Movies" rightIcon={allImage.user} />
      <ScrollView contentContainerStyle={{paddingBottom: hp(5)}}>
        <View style={style.container}>
          {Movie.map((item, index) => {
            return (
              <View key={index} style={{marginTop: hp(3)}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UpcomingDetailScreen', {
                      data: item,
                    })
                  }>
                  <Image
                    style={{height: hp(35), width: wp(44), borderRadius: wp(4)}}
                    source={item.img}
                  />
                </TouchableOpacity>
                <Text style={{textAlign: 'center', marginTop: hp(1)}}>
                  {item.text}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default UpComingScreen;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
});
