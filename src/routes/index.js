import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/intro/WelcomeScreen';
import SignInScreen from '../screens/login/SignInScreen';
import SignUpScreen from '../screens/register/SignUpScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconImg from '../components/Home/IconImg';
import {allImage} from '../constants/Image';
import {
  HomeScreen,
  MovieDetailScreen,
  PaymentScreen,
  SelectSeatScreen,
  SelectTheatreScreen,
  SelectTicketScreen,
  TicketBookingScreen,
  TheatreScreen,
  UpComingScreen,
  UpcomingDetailScreen,
  NewScreen,
  NewsReviewScreen,
  SettingScreen,
} from '../screens/bottom tab';

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
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'In Theatres',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.film} colour={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UpcomingStack"
        component={UpComingStack}
        options={{
          tabBarLabel: 'Up Coming',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.upcomingmovie} colour={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TheatreScreen"
        component={TheatreScreen}
        options={{
          tabBarLabel: 'Theatres',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.theater} colour={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NewStack"
        component={NewStack}
        options={{
          tabBarLabel: 'News',

          tabBarIcon: ({color}) => (
            <IconImg img={allImage.news} colour={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
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
      // initialRouteName="MyTabs"
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
