import React from 'react';
import {View, Text} from 'react-native';
import Routes from '../src/routes/index';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {MenuProvider} from 'react-native-popup-menu';

enableScreens();

const App = () => {
  return (
    <MenuProvider>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </View>
    </MenuProvider>
  );
};

export default App;
