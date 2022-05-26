import React, { useState, useEffect } from 'react';
import {View, Text, Alert, StyleSheet, Image, Modal, ImageBackground} from 'react-native'; // voor design statusbar toevoegen
import {TouchableHighlight, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from './theme';
import katakanaData from '../data/katakanadata'
import{storeNum} from '../analytcsData2'

MaterialCommunityIcons.loadFont();
const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}
let arr = katakanaData;

function Katakanae({navigation}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOption, setCurrentOption] = useState(true);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [push, setPush]=useState(true);

    const showConfirmDialog = () => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to leave?",
          [// Yes (every set of usestate need to be resetted)
            {text: "Yes",
                onPress: () => {shuffle(arr),navigation.goBack(), setCurrentQuestionIndex(0),setScore(0),setShowNextButton(false),setShowScoreModal(false)}
            },
            //No
            // Does nothing but dismiss the dialog when tapped
            {text: "No",},]); 
        };
    const nextButton = () => {
        if(showNextButton){
            return(
                <TouchableOpacity
                onPress={handleNext}
                style={{
                    marginTop: 5, 
                    width: '90%', 
                    backgroundColor: COLORS.accent, 
                    padding: 20, 
                    borderRadius: 5,
                    alignSelf: 'center'
                }}
                >
                    <Text style={{fontSize: 20, 
                        color: COLORS.white, 
                        textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
            )
        }
        else{
            return null
        }
    }
    const handleNext = () => {
        if(currentQuestionIndex == arr.length-1){
            setShowScoreModal(true);
            storeNum(score)
        }
        else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setShowNextButton(false);
            setPush(true);
        }
    }
    const question = () => {
        return(
            <View>
                <Text style={styles.question}>What kana corresponds with "{arr[currentQuestionIndex].title}"?</Text>
            </View>
        )
    }
    const validate = (option) => {
        let correct_option = arr[currentQuestionIndex]['image'];
        if(push){
            if(option==correct_option){
                //score
                setScore(score +1)
                }
        }
        setPush(false);
        setShowNextButton(true)
    }
    const rand =()=> {
        let x = Math.floor((Math.random() * 2) + 0);
        return x;
    }
    let r = rand();
    const options = () => {
        if(r){
            return(
                <View style={styles.optior}>
                    <TouchableHighlight onPress={() =>validate(arr[currentQuestionIndex].imageoptions[1])}><Image source={arr[currentQuestionIndex].imageoptions[1]} style={{width:190,height:190,borderWidth:2,margin:10,borderRadius:10,}}></Image></TouchableHighlight>
                    <TouchableHighlight onPress={() =>validate(arr[currentQuestionIndex].imageoptions[0])}><Image source={arr[currentQuestionIndex].imageoptions[0]} style={{width:190,height:190,borderWidth:2,margin:10,borderRadius:10,}}></Image></TouchableHighlight>
                </View>
            )
        }
        else{
            return(
                <View style={styles.optior}>
                    <TouchableHighlight onPress={() =>validate(arr[currentQuestionIndex].imageoptions[0])}><Image source={arr[currentQuestionIndex].imageoptions[0]} style={{width:190,height:190,margin:10,borderWidth:2,borderRadius:10,}}/></TouchableHighlight>
                    <TouchableHighlight onPress={() =>validate(arr[currentQuestionIndex].imageoptions[1])}><Image source={arr[currentQuestionIndex].imageoptions[1]} style={{width:190,height:190,margin:10,borderWidth:2,borderRadius:10,}}/></TouchableHighlight>
                </View>
            )
        }
    }

    const quit = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowNextButton(false);
        setShowScoreModal(false);
        navigation.goBack();
        shuffle(arr);
    }
    return (
        <View style={styles.container}>
            <View><MaterialCommunityIcons style={styles.closeicon} name='close' onPress={() => showConfirmDialog()}></MaterialCommunityIcons></View>
                {/* questioncount */}
                <Text style={styles.qucount}>Question {currentQuestionIndex + 1} out of {arr.length} questions</Text>
                {/* score */}
                <Text style={styles.scores}>{score} / {arr.length} </Text>
                {question()}
                {options()}
                {nextButton()}
                {/* modal */}
                <Modal animationType='slide' transparent={true} visible={showScoreModal}>
                <View style={{
                       flex: 1,
                       backgroundColor: COLORS.primary,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (arr.length/2) ? 'Goed gedaan!' : 'Volgende keer beter!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (arr.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { arr.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={quit}
                           style={{
                               backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.white, fontSize: 20
                               }}>Exit</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
                </Modal>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },
    closeicon:{
        fontSize:50,
        color:'#0C0D0E',
    },
    scores: {
        alignSelf: 'center'
    },
    qucount: {
        paddingTop: 10,
        alignSelf: 'center',
    },
    question: {
        alignSelf: 'center',
        fontSize:22,
    },
    optior: {
        marginTop:30,
        alignSelf:'center'
    }
   }); 
export default Katakanae;
