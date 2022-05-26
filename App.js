import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Home from './components/home';
import Theorie from './components/theorie';
import Oefeningen from './components/oefeningen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Analytics from './components/analytics'



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden='true'
      />
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        drawerStyle: {backgroundColor: 'white', width: 240},  
      }}>
        <Drawer.Screen options={{headerShown: false}} name="Home"  component={Home} />
        <Drawer.Screen options={{headerShown: false}} name="Theorie" component={Theorie} />
        <Drawer.Screen options={{headerShown: false}} name='Oefeningen' component={Oefeningen} />
        <Drawer.Screen options={{headerShown: false}} name="Analytics" component={Analytics} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
// options={{headerShown: false}}

