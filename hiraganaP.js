import React, { useState } from 'react';
import {View, Text, TextInput, Alert, StyleSheet, Image, Modal} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from './theme';
import{storeNum} from '../analyticsData'
import hiraganaData from '../data/hiraganadata';

MaterialCommunityIcons.loadFont();
const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}
let arr = hiraganaData;
function HiraganaP({navigation}) {
    const [textInput, onchangeText] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [submitb, setSubmitb] = useState(false);
    const [next, setNext] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    //if no text is entered there can be no submit or next question
    // validate the anwer
    
    
    const validateAnswer = (textInput) => {
        const correct_option = arr[currentQuestionIndex].title;
        if(textInput == null)
        {
            alert("You need to answer before you can proceed!");
        }
        else
        {
            setNext(false);
            if(correct_option === textInput && submitb != true){
                setScore(score + 1);
            }
        }
        onchangeText(null);
        setSubmitb(true);        
    }
    const handleNext = () => {
        //function to handle the next button
        if(currentQuestionIndex == arr.length-1){
            storeNum(score)
            setShowScoreModal(true)
        }
        else{
            if(next != true)
            {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setNext(true);
                setSubmitb(false);
            }
        }
    }
    const showConfirmDialog = () => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to leave?",
          [// Yes (every set of usestate need to be resetted)
            {text: "Yes",
                onPress: () => {shuffle(arr),setScore(0), setCurrentQuestionIndex(0), onchangeText(null), setNext(false), navigation.goBack()}
            },
            //No
            // Does nothing but dismiss the dialog when tapped
            {text: "No",},]); };
    const quit = () => {
        setScore(0);
         setCurrentQuestionIndex(0);
          onchangeText(null);
           setNext(false);
           setShowScoreModal(false);
           navigation.goBack();
           shuffle(arr);
        }

    return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}>
            
            <View>
                <View><MaterialCommunityIcons style={styles.closeicon} name='close' onPress={() => showConfirmDialog()}></MaterialCommunityIcons></View>
                {/* questioncount */}
                <Text style={styles.qucount}>Question {currentQuestionIndex + 1} out of {arr.length} questions</Text>
                
                {/* score */}
                <Text style={styles.scores}>{score} / {arr.length}</Text>
                
                {/* question */}
                <Image style={styles.im} source={arr[currentQuestionIndex].image}></Image>

                

                {/* textinput */}
                <View>
                <TextInput
                style={styles.input}
                onChangeText={onchangeText}
                value={textInput}
                placeholder='your answer'
                autoCapitalize='none'
                autoCorrect= 'false'
                />
                </View>

                {/* submit && next Button */}
                <View style={styles.Vtouch}>
                    {/* send inputext via the submit button with fucntion if good return +1 score  */}
                    <TouchableOpacity  style={styles.submit} onPress={() => validateAnswer(textInput)}>
                    <Text>Submit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.next} onPress={() => handleNext()}>
                    <Text>Next</Text>
                    </TouchableOpacity>
                </View>
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
            </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    closeicon:{
        fontSize:50,
        color:'#0C0D0E',
    },
    container:{
        marginTop:20,
    },
    qucount: {
        paddingTop: 10,
        alignSelf: 'center',
    },
    im: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop:50, 
        borderWidth: 3,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    input: {
        width: 250,
        height: 50,
        marginTop: 50,
        borderWidth: 2,
        padding: 10,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor:'white',
    },
    scores: {
        alignSelf: 'center'
    },
    Vtouch: {
        marginTop:15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    submit: {
        width: 150,
        padding: 15,
        borderWidth: 3,
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 10,
        backgroundColor:'#349DA4',
        borderColor:'#349DA4'
    },
    next: {
        width: 150,
        padding: 15,
        borderWidth: 3,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10,
        backgroundColor:'#349DA4',
        borderColor:'#349DA4'
    }
   }); 
export default HiraganaP;
