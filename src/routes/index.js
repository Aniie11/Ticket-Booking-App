import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/intro/WelcomeScreen';
import SignInScreen from '../screens/login/SignInScreen';
import SignUpScreen from '../screens/register/SignUpScreen';
import {
  MovieDetailScreen,
  PaymentScreen,
  SelectSeatScreen,
  SelectTheatreScreen,
  SelectTicketScreen,
  TicketBookingScreen,
  UpcomingDetailScreen,
  NewsReviewScreen,
} from '../screens/bottom tab';
import TabRoutes from './TabRoutes';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabRoutes"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

      <Stack.Screen name="TabRoutes" component={TabRoutes} />
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
