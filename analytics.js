import React, { useState, useEffect, Component } from 'react';
import {Image,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hiraganaData from './data/hiraganadata';
import katakanaData from './data/katakanadata';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Analytics1 from './analyticsData';
import Analytics2 from './analytcsData2';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
MaterialCommunityIcons.loadFont();
    export const storeNum = async (val) =>{
      try{
            let id = (Math.random() + 1).toString(36).substring(7);
            var id33 = id;
            const jsonValue = JSON.stringify(val)
            await AsyncStorage.setItem(id33, jsonValue)
          console.log(jsonValue)
      }catch(e){
        alert("error")
      }
    }

     const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
        }
        console.log('Done.')
      }

export default function Analytics() {
  return(
    <NavigationContainer independent='true'>
    <Stack.Navigator>
        <Stack.Screen name="Tabnavigator" component={Tabnavigator} options={{headerShown: false}}/>
    </Stack.Navigator>
</NavigationContainer>
  )
}

const Tabnavigator = () => {
  return ( 
      <Tab.Navigator screenOptions={{
          tabBarActiveTintColor: 'black',
          display:'flex',
          Style: styles.tabBar,
          tabBarinactiveTintcolor: "#696969",
          tabBarActiveBackgroundColor: '#008080',
          showIcon: true,
          }}>
          <Tab.Screen name="Hiragana" component={Analytics1} options={{tabBarIcon:(tabInfo) => (<Image style={{width:40,height:40,}}  source={hiraganaData[0].image}/>)}} />
          <Tab.Screen name="Katakana" component={Analytics2} options={{tabBarIcon:(tabInfo) => (<Image style={{width:40,height:40,}} source={katakanaData[0].image}/>)}}/>
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
     display: 'flex',
  },
 }); 