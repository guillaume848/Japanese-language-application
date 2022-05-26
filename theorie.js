import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hiragana from './theorieData/hiragana'
import Katakana from './theorieData/katakana';
import hiraganaData from './data/hiraganadata';
import katakanaData from './data/katakanadata';
import Practice from './theorieData/htp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
MaterialCommunityIcons.loadFont();

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
            <Tab.Screen options={{tabBarIcon:(tabInfo) => (<Image style={{width:40,height:40,}}  source={hiraganaData[0].image}/>)}} name="Hiragana" component={Hiragana}/>
            <Tab.Screen name="Katakana" component={Katakana} options={{tabBarIcon:(tabInfo) => (<Image style={{width:40,height:40,}} source={katakanaData[0].image}/>)}} />
            <Tab.Screen name='Practice' component={Practice} options={{tabBarIcon:(tabInfo) => (<MaterialCommunityIcons name="pencil" style={{fontSize:30}}></MaterialCommunityIcons>)}}/>
        </Tab.Navigator>
    )
}

const Theorie = () => { 
    return (
        <NavigationContainer independent='true'>
            <Stack.Navigator>
                <Stack.Screen name="Tabnavigator" component={Tabnavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
 tabBar: {
    display: 'flex',
 },
}); 

export default Theorie;