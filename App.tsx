import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{flex:1,backgroundColor:'blue'}}>
    <View style={{backgroundColor: 'red',flex:1}}></View>
      <View style={{backgroundColor:'black',flex:1,flexDirection:'row'}}>
      <View style={{backgroundColor:'white',flex:1,}}></View>
      <View style={{backgroundColor:'grey',flex:1}}></View>
      <View style={{backgroundColor:'#1230AE',flex:1}}>
        <View style={{backgroundColor:'#FF6600',flex:1,position:'absolute',top:'0%',left: '40%',width: '30%',height:'25%'}}></View>
        <View style={{backgroundColor:'#8FD14F',flex:1,position:'absolute',top:'26%',left:'40%',width:'30%',height:'26%'}}></View>
        <View style={{backgroundColor:'#604CC3',flex:1,position:'absolute',top:'53%',left:'40%',width:'30%',height:'26%'}}></View>
        <View style={{backgroundColor:'#00CCDD',flex:1,position:'absolute',top:'80%',left:'40%',width:'30%',height:'25%'}}></View>
  </View>
  </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
