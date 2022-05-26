import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HiraganaP from './oefeningData/hiraganaP';
import Hiraganam from './oefeningData/hiraganaM';
import Hiraganae from './oefeningData/hiraganE';
import Katakanae from './oefeningData/katakanaE';
import KatakanaM from './oefeningData/katakanaM';
import KatakanaP from '../components/oefeningData/katakanaP'

const Stack = createNativeStackNavigator();
MaterialCommunityIcons.loadFont();


function Page({navigation}) {
    
    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.container1}>
        <Text style={styles.title}>Hiragana</Text>
        <TouchableOpacity style={styles.to} onPress={() => navigation.navigate('Hiraganam')}><Text style={styles.toi}>Easy</Text></TouchableOpacity>
        <TouchableOpacity style={styles.to} onPress={() => navigation.navigate('hiraganaE')}><Text style={styles.toi}>Medium</Text></TouchableOpacity>
        <TouchableOpacity style={styles.to} onPress={() => navigation.navigate('HiraganaP')}><Text style={styles.toi}>Difficult</Text></TouchableOpacity>
        </View>

        <View style={styles.container2}>
        <Text style={styles.title}>Katakana</Text>
        <TouchableOpacity style={styles.to} onPress={()=> navigation.navigate('KatakanaM')}><Text style={styles.toi}>Easy</Text></TouchableOpacity>
        <TouchableOpacity style={styles.to} onPress={()=> navigation.navigate('Katakanae')}><Text style={styles.toi}>Medium</Text></TouchableOpacity>
        <TouchableOpacity style={styles.to} onPress={()=> navigation.navigate('KatakanaP')}><Text style={styles.toi}>Difficult</Text></TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
};

function Oefeningen() {
    return(
        <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName='Page'>
            <Stack.Screen name='Page' component={Page} options={{headerShown: false}} />
            <Stack.Screen name='HiraganaP' component={HiraganaP} options={{headerShown: false}}/>
            <Stack.Screen name='Hiraganam' component={Hiraganam} options={{headerShown: false}}/>
            <Stack.Screen name='hiraganaE' component={Hiraganae} options={{headerShown: false}}/>
            <Stack.Screen name='Katakanae' component={Katakanae} options={{headerShown: false}}/>
            <Stack.Screen name='KatakanaP' component={KatakanaP} options={{headerShown: false}}/>
            <Stack.Screen name='KatakanaM' component={KatakanaM} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    container1: {

    },
    container2: {
       
    },
    title: {
        fontSize: 40,
        marginTop: 30,
        marginLeft: 50,
    },
    to: {
        marginLeft: 50,
        margin: 15,
        width:300,
        borderRadius:20,
        backgroundColor:'#D1D3D2',
        
    },
    toi: {
        fontSize: 36,
        alignSelf:'center',
        padding: 30,
        
    },


}); 
export default Oefeningen;
