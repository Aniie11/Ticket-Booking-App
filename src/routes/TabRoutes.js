import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  TheatreScreen,
  UpComingScreen,
  NewScreen,
  SettingScreen,
} from '../screens/bottom tab';
import {createStackNavigator} from '@react-navigation/stack';
import IconImg from '../components/Home/IconImg';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {allImage} from '../constants';
const Stack = createStackNavigator();
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

const Tab = createBottomTabNavigator();
const TabRoutes = () => {
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
            <IconImg img={allImage.film} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UpcomingStack"
        component={UpComingStack}
        options={{
          tabBarLabel: 'Up Coming',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.upcomingmovie} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TheatreScreen"
        component={TheatreScreen}
        options={{
          tabBarLabel: 'Theatres',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.theater} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="NewStack"
        component={NewStack}
        options={{
          tabBarLabel: 'News',

          tabBarIcon: ({color}) => (
            <IconImg img={allImage.news} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <IconImg img={allImage.setting} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
