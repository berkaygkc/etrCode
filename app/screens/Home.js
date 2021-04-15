import React, {useEffect} from 'react';
import { View , Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HESCode from './HESCode';
import etrCode from './etrCode';
import settings from './settings'
import { theme } from '../core/theme';

const Tab = createBottomTabNavigator();

function MyTabs() {
    useEffect(() => {
        Expo.Font.loadAsync();
      }) 
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'etrCode') {
                iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
            } else if (route.name === 'HES Kodu') {
                iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Ayarlar') {
                iconName = focused ? 'settings-outline' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
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