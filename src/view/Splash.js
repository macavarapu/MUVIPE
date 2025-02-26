// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const SplashScreen = () => {
//   return (
//     <View>
//       <Text>Splash</Text>
//     </View>
//   )
// }

// export default SplashScreen

// const styles = StyleSheet.create({})


import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Bottom');
      }, 3); // Change screen after 3 seconds
    }, []);
  return (
    <LinearGradient 
      colors={['#003366', '#006699']} 
      style={styles.container}
    >
     <Text style={styles.title}>MUVIPE APP</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
   fontSize:30,
   color:"white",
  },
});

export default SplashScreen;
