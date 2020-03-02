import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../src/screens/WelcomeScreen/WelcomeScreen';
import SignInScreen from '../screens/LoginScreen/SignInScreen';
import SignUpScreen from '../screens/LoginScreen/SignUpScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingScreen from '../screens/HomeScreen/SettingDetails/SettingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconImg from '../components/Home/IconImg';
import {allImage} from '../constants';
import MovieDetailScreen from '../screens/HomeScreen/MovieDetailScreen';
import TicketBookingScreen from '../screens/HomeScreen/TicketBookingScreen';
import SelectTheatreScreen from '../screens/HomeScreen/SelectTheatreScreen';
import SelectTicketScreen from '../screens/HomeScreen/SelectTicketScreen';
import UpComingScreen from '../screens/HomeScreen/UpComing/UpComingScreen';
import TheatreScreen from '../screens/HomeScreen/Theatres/TheatreScreen';
import SelectSeatScreen from '../screens/HomeScreen/SelectSeatScreen';
import PaymentScreen from '../screens/HomeScreen/PaymentScreen';
import NewScreen from '../screens/HomeScreen/News/NewScreen';
import NewsReviewScreen from '../screens/HomeScreen/News/NewsReviewScreen';
import UpcomingDetailScreen from '../screens/HomeScreen/UpComing/UpcomingDetailScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarVisible: true}}
      tabBarOptions={{
        activeTintColor: 'red', //label and icon color chnage hunxa but icon ma props pathayera garnu parxa
        style: {
          height: hp(8),
        },
      }}>
      <Tab.Screen
        name="Icon1"
        component={HomeStack}
        options={{
          tabBarLabel: 'In Theatres',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.film} colour={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Icon2"
        component={UpComingStack}
        options={{
          tabBarLabel: 'Up Coming',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.upcomingmovie} colour={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Icon3"
        component={TheatreScreen}
        options={{
          tabBarLabel: 'Theatres',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.theater} colour={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Icon4"
        component={NewStack}
        options={{
          tabBarLabel: 'News',

          tabBarIcon: ({color}) => (
            <IconImg img={allImage.news} colour={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Icon5"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.setting} colour={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const NewStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={NewScreen} name="NewScreen" />
    </Stack.Navigator>
  );
};

const UpComingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={UpComingScreen} name="UpComingScreen" />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyTabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      <Stack.Screen name="MyTabs" component={MyTabs} />
      {/* This is for first tab  Screen(bottom tab hatauna yeta rakheko('buttom tab baira))*/}
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      <Stack.Screen
        name="TicketBookingScreen"
        component={TicketBookingScreen}
      />
      <Stack.Screen
        name="SelectTheatreScreen"
        component={SelectTheatreScreen}
      />
      <Stack.Screen name="SelectTicketScreen" component={SelectTicketScreen} />
      <Stack.Screen name="SelectSeatScreen" component={SelectSeatScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      {/* NewStack bata yeta lyako button tab hatauna */}
      <Stack.Screen component={NewsReviewScreen} name="NewsReviewScreen" />
      {/* UpcomingStack bata yeta lyako button tab hatauna */}
      <Stack.Screen
        component={UpcomingDetailScreen}
        name="UpcomingDetailScreen"
      />
    </Stack.Navigator>
  );
};

export default MyStack;
