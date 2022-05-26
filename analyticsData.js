import React, { useState, useEffect, Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Dimensions,ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart } from 'react-native-chart-kit';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();
    export const storeNum = async (val) =>{
      try{
            let id = "m"+(Math.random() + 1).toString(36).substring(7);
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

export default function Analytics1() {
  const [favoriteTeams, setFavoriteTeams] = useState([]);
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow1, setShouldShow1] = useState(false);

  const fetchAllItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      setFavoriteTeams(items);
    } catch (error) {
      console.log(error);
      }
  }
  let pointId = favoriteTeams.map((kays,i,val)=>{
    let  key = val[i][0];
    return key;
  })
  let point = favoriteTeams.map((kays,i,val)=>{
    let  key = val[i][1];
    return key;
  })
 //console.log(point);
 const rpoint = ()=> {
   let array = [];
   let j=0;
   for(let i = 0;i<point.length;i++){if(pointId[i].charAt(0)=="m"){
     array[j] = point[i];
     j++
   }}
   return array;
 }
 let realpoint = rpoint();
  const aantal = () =>{
    let array = [];
    for(let i = 0;i<realpoint.length;i++){
      array[i] = (i+1); 
    }
    return array;
  }
  let arr = aantal();
  const linedata = {
    labels: arr,
    datasets: [
      {
        data: realpoint,
        strokeWidth: 2, 
      },
    ],
  };
  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }
  const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "are you sure you want to delete all your scores?",
      [// Yes (all shall be deleted)
        {text: "Yes",
            onPress: () => {clearAll()}
        },
        //No
        // Does nothing but dismiss the dialog when tapped
        {text: "No",},]); 
    };
    useEffect(() => {
      fetchAllItems()
    }); 
  return (
    <ScrollView>
    <View style={{ margin: 40 , alignItems:'center'}} id="">
      
      <MaterialCommunityIcons style={styles.closeicon} name='trash-can-outline' onPress={showConfirmDialog}></MaterialCommunityIcons>
      <TouchableOpacity style={styles.to} onPress={()=>setShouldShow(!shouldShow)}>
        <Text style={styles.toi}>Results</Text>
      </TouchableOpacity>
      { shouldShow ?
      (<View>{realpoint.map((item) => {
        return(<View style={{alignSelf:'center', margin:10}}><View style={styles.points}><Text style={{alignSelf:'center'}}>{item}/5</Text></View></View>)})}</View>
      ): null}
      <TouchableOpacity style={styles.to} onPress={()=>setShouldShow1(!shouldShow1)}>
        <Text style={styles.toi}>show graphics</Text>
      </TouchableOpacity>
      {shouldShow1 ?
        <LineChart
        data={linedata}
        width={Dimensions.get('window').width} // from react-native
        height={300}
        chartConfig={{
          backgroundColor: 'black',
          backgroundGradientFrom: '#008080',
          backgroundGradientTo: 'grey',
          decimalPlaces: 1, 
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      :null}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  to: {
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
points: {
  backgroundColor: '#e3e3e3',
  width:300,
  padding:10,
  borderRadius:10,
  borderColor: '#000000',
  borderWidth: 1,
},
closeicon:{
  fontSize:50,
  color:'#0C0D0E',
  alignSelf:'flex-end',
},
})