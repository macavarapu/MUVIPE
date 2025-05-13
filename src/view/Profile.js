
// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import HeaderScreen from "../commponents/Header";
// import { useNavigation } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// const ProfileScreen = ({ navigation }) => {
//   const [userData, setUserData] = useState(null);
//   navigation = useNavigation();

//   // Function to retrieve user data from AsyncStorage
//   const getUserData = async () => {
//     try {
//       const data = await AsyncStorage.getItem("userData");
//       if (data) {
//         setUserData(JSON.parse(data));
//       }
//     } catch (error) {
//       console.log("Error retrieving user data:", error);
//     }
//   };

//   // Fetch user data when the profile screen loads
//   useEffect(() => {
//     getUserData();
//   }, []);

//   // Logout Function (Clear stored data)
//   const handleLogout = async () => {    
//       try {
//       await AsyncStorage.removeItem("userData");
//       Alert.alert("Logout Successful", "You have been logged out.");
//       navigation.navigate("login");
//     } catch (error) {
//       console.log("Error clearing storage:", error);
//     }
    
    
//   };

// return (
//   <View style={{ flex: 1, backgroundColor: "#003366" }}>
//     <View>
//       <HeaderScreen title="Profile" />
//     </View>
//     <View style={styles.ImageContainer}>
//       <Image source={require('../assets/images/singam.jpg')} style={styles.avatar} />
//       <Text style={styles.title}>Profile</Text>


//       {userData ? (
//         <>
//           <Text style={styles.info}>Email: {userData.email}</Text>
//           <Text style={styles.info}>Phone: {userData.phoneNumber}</Text>
//         </>
//       ) : (
//         <Text style={styles.info}>Loading user data...</Text>
//       )}

//       <View style={styles.menuItem}>
//         <Icon name="share" size={24} color="white" />
//         <Text style={styles.menuText}>Refer & Earn</Text>
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
 


//   </View>


// );
// };

// const styles = StyleSheet.create({
//   ImageContainer: {
//     flex: 1,
//     marginBottom: 50,
//     padding: 20,
//     borderRadius: 30,

//     alignItems: "center",
//   },
//   avatar: {
//     width: 100,
//     height: 100, // Make height and width equal
//     borderRadius: 50, // Half of width/height to make it a perfect circle
//     borderWidth: 2,
//     borderColor: "white",
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#00A2FF",
//     marginBottom: 20,
//   },
//   info: {
//     fontSize: 13,
//     color: "white",
//     marginBottom: 10,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: "#FF5733",
//     padding: 12,
//     borderRadius: 15,
//     width: "100%",
//     alignItems: "center"

//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//   },
//   menuItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "90%",
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "white",
//   },
//   menuText: {
//     color: "white",
//     fontSize: 16,
//     marginLeft: 15,
//     flex: 1,
//   },
// });

// export default ProfileScreen;





import React,{useEffect,useState} from "react";
import { View, Text, Image, Switch, StyleSheet ,Alert,TouchableOpacity} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";


import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderScreen from "../commponents/Header";

const ProfileScreen = ({navigation}) => {

  const [userData, setUserData] = useState(null);
  navigation = useNavigation();
  
  // Function to retrieve user data from AsyncStorage
  const getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem("userData");
      if (data) {
        setUserData(JSON.parse(data));
      }
    } catch (error) {
      console.log("Error retrieving user data:", error);
    }
  };

  // Fetch user data when the profile screen loads
  useEffect(() => {
    getUserData();
  }, []);

  // Logout Function (Clear stored data)
  const handleLogout = async () => {    
      try {
      await AsyncStorage.removeItem("userData");
      Alert.alert("Logout Successful", "You have been logged out.");
      navigation.navigate("login");
    } catch (error) {
      console.log("Error clearing storage:", error);
    }
    
    
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <HeaderScreen title="Profile" />
      <Image source={require('../assets/images/singam.jpg')} style={styles.avatar} />


      {userData ? (
        <>
          <Text style={styles.info}>Email: {userData.email}</Text>
          <Text style={styles.info}>Phone: {userData.phoneNumber}</Text>
        </>
      ) : (
        <Text style={styles.info}>Loading user data...</Text>
      )}
     

    
      <View style={styles.menuItem}>
        <Icon name="share" size={24} color="white" />
        <Text style={styles.menuText}>Refer & Earn</Text>
      </View>

      <View style={styles.menuItem}>
        <Icon name="wallet" size={24} color="white" />
        <Text style={styles.menuText}>Wallet</Text>
      </View>

      <View style={styles.menuItem}>
        <Icon name="ticket" size={24} color="white" />
        <Text style={styles.menuText}>Tickets</Text>
      </View>

     
      <View style={styles.menuItem}>
        <Icon name="bell" size={24} color="white" />
        <Text style={styles.menuText}>Notifications</Text>
       
      </View>

      <View style={styles.menuItem}>
        <Icon name="help-circle" size={24} color="white" />
        <Text style={styles.menuText}>Help & Support</Text>
      </View>

      <TouchableOpacity style={styles.menuItem}
      onPress={handleLogout}
      >
        <Icon name="account-remove" size={24} color="white" />
        <Text style={styles.menuText}>Delete Account</Text>

      </TouchableOpacity>

     
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366",
    alignItems: "center",
    paddingTop: 40,
  },
  info: {
    fontSize: 13,
    color: "white",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  userId: {
    fontSize: 16,
    color: "white",
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    padding: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: "white",
  },
  menuText: {
    color: "white",
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  buttonText: {
        color: "white",
        fontSize: 16,
      },
});

export default ProfileScreen;