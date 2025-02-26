import { StyleSheet, Text, View  ,TouchableOpacity,Image} from 'react-native'
import React from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const HeaderScreen = ({title,onpress}) => {
  const navigation=useNavigation();
  return (
    <View style={styles.Container}>
      <View style={{  flex:1,flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}
        style={styles.iconContainer}>
        <Entypo name={"menu"} size={30} color={"white"} style={styles.Iconsize}/>
        </TouchableOpacity>
        <Text style={{marginLeft:12,fontSize:18,fontWeight:"600",color:"white"}}>{title}</Text>
        <TouchableOpacity style={styles.iconContainer}>
        <Ionicons onPress={onpress}
         name={"notifications-outline"} size={30} color={"white"} style={styles.Iconsize}/>
        </TouchableOpacity>
      </View>
    </View>
    
  )
}

export default HeaderScreen

const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
        justifyContent:"space-between",
       
       marginTop:20,
       marginHorizontal:16,

      },
      iconContainer:{
        height:45,
        width:45,
        borderRadius:999,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"green",
      },
   Ionicons:{
    height:24,
    width:25,
    tintColor:"black"
   }
})



