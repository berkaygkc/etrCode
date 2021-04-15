import React, {useEffect, useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HESCode from './HESCode';
import etrCode from './etrCode';
import settings from './settings'
import { theme } from '../core/theme';
import * as Font from 'expo-font';
import { AppLoading } from 'expo-app-loading';

const Tab = createBottomTabNavigator();

function MyTabs() {

    const [fontloaded,setfontloaded]=useState(false)
    
    const fetchFonts = async() => {
        Font.loadAsync({
          'PacificoRegular': require('../assets/fonts/Pacifico-Regular.ttf'),
          "ionicons" : require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
      });
    }
    
    return (
      fontloaded ?  
        <AppLoading
          startAsync={fetchFonts}
          onFinish={()=>{setfontloaded(true)}}
          onError={console.warn}/>
      :
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'etrCode') {
                iconName = focused ? '' : '';
            } else if (route.name === 'HES Kodu') {
                iconName = focused ? '' : '';
            } else if (route.name === 'Ayarlar') {
                iconName = focused ? '' : '';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: theme.colors.primary,
            inactiveTintColor: 'grey',
        }}>
            
          <Tab.Screen name="HES Kodu" component={HESCode} />
          <Tab.Screen name="etrCode" component={etrCode} />
          <Tab.Screen name="Ayarlar" component={settings} />
        </Tab.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}