import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import HeaderScreen from '../commponents/Header'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex:1,backgroundColor:"#003366" }}>
    
    <HeaderScreen title={"Profile"}/>
  
  
    
</SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})