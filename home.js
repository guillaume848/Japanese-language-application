import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

function Home({navigation}) {
    return (
        <View>
        <MaterialCommunityIcons style={{fontSize:40,marginTop:25,marginLeft:5}} name='format-horizontal-align-right'></MaterialCommunityIcons>
        <View style={{alignSelf:'center'}}>
            <Image style={{width:300,height:100,marginTop: 60,marginBottom:30,alignSelf:'center',borderRadius:20,borderWidth:2}} source={require("./images/R.jpg")}></Image>
            <Text style={{fontSize:32,alignSelf:'center'}}>Welcome to </Text>
            <Text style={{fontSize:28,alignSelf:'center'}}>"japanese language application"</Text>
            <Text style={{margin:20,alignSelf:'center' }}>This app will help you to learn the basics of Japanese, by combining theory with fun exercises to test your knowledge and maintain your previously learned skills of the two ‘kana’ scripts.</Text>
        </View>
        </View>
    )
}

export default Home;