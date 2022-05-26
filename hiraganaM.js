import React, { useState } from 'react';
import {View, Text, Alert, StyleSheet, Image, Modal} from 'react-native'; // voor design statusbar toevoegen
import {TouchableOpacity } from 'react-native-gesture-handler';
import hiraganaData from '../data/hiraganadata';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from './theme';;
import{storeNum} from '../analyticsData'
import { set } from 'react-native-reanimated';

MaterialCommunityIcons.loadFont();

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}
let arr = hiraganaData;
function Hiraganam({navigation}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null); 
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
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
                onPress: () => {shuffle(arr),navigation.goBack(), setCurrentQuestionIndex(0),setCurrentOptionSelected(null),setCorrectOption(null),setIsOptionsDisabled(false),setScore(0),setShowNextButton(false),setShowScoreModal(false)}
            },
            //No
            // Does nothing but dismiss the dialog when tapped
            {text: "No",},]); 
        };
    
    const validate = (option) => {
        
        let correct_option = arr[currentQuestionIndex]['title'];
        setCurrentOptionSelected(option);
        setCorrectOption(correct_option);
        if(push){
            if(option==correct_option){
                //score
                setScore(score +1)
                }
        }
        setPush(false);
        setShowNextButton(true)
    }    
    const question = () => {
        return (
            <View>
                <Image style={styles.im} source={arr[currentQuestionIndex].image}></Image>
            </View>
        )
    }
    const options = () => {
        return(
            <View>
                {
                    arr[currentQuestionIndex]?.options.map(option =>(
                        <TouchableOpacity
                        onPress={()=> validate(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 4,
                            borderColor: option==correctOption 
                            ? COLORS.success 
                            : option==currentOptionSelected 
                            ? COLORS.error 
                            :COLORS.secondary+'40',
                            backgroundColor: option==correctOption 
                            ? COLORS.success +'20'
                            : option==currentOptionSelected 
                            ? COLORS.error +'20'
                            : COLORS.secondary+'20',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'center',
                            marginVertical: 10,
                            margin:10,
                        }}
                        >
                            <Text>{option}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
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
            storeNum(score);
            setShowScoreModal(true);
            
        }
        else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
            setPush(true);
        }
    }
    const quit = () => {
        setCurrentQuestionIndex(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setScore(0);
        setShowNextButton(false);
        setShowScoreModal(false);
        navigation.goBack();
        shuffle(arr);
    }
    return (
        <View style={styles.container}>
                <View>
                <View><MaterialCommunityIcons style={styles.closeicon} name='close' onPress={() => showConfirmDialog()}></MaterialCommunityIcons></View>
                {/* questioncount */}
                <Text style={styles.qucount}>Question {currentQuestionIndex + 1} out of {arr.length} questions</Text>
                
                {/* score */}
                <Text style={styles.scores}>{score} / {arr.length} </Text>
                
                {/* question */}
                {question()}
                {/* options */}
                {options()}
                {/* next */}
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
        </View>
    );
};

const styles = StyleSheet.create({
    closeicon:{
        fontSize:50,
        color:'#0C0D0E',
    },
    qucount: {
        paddingTop: 10,
        alignSelf: 'center',
    },
    container:{
        marginTop:20,
    },
    im: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop:30, 
        borderWidth: 3,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    scores: {
        alignSelf: 'center'
    },
    multichoice: {
        alignSelf: 'center',
        margin: 15,
        backgroundColor: '#D1D3D2',
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#9B9B9B',
    },
    multichoice1: {
        alignSelf: 'center',
        margin: 15,
        backgroundColor: '#349DA4',
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#9B9B9B',
    },
    mt: {
        alignSelf: 'center',
        padding: 15,
    },
    onSubmit: {
        alignSelf: 'center',
        marginTop: 5,
        backgroundColor: '#349DA4',
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
    },
   }); 
export default Hiraganam
