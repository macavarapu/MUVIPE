import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import HeaderScreen from '../commponents/Header'

const TicketsScreen = () => {
  return (
    <SafeAreaView style={{ flex:1,backgroundColor:"#003366" }}>
    
    <HeaderScreen title={"Ticket"}/>
  
  
</SafeAreaView>
  )
}

export default TicketsScreen

const styles = StyleSheet.create({})