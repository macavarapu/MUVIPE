
// import React from "react";
// import { View, Text, Image, StyleSheet ,TouchableOpacity} from "react-native";
// import Video from "react-native-video";

// const MovieDetails = ({ route }) => {
//   const { movie } = route.params || {}; // Avoid errors if movie is undefined

//   return (
//     <View style={styles.vcontainer}>
//       <Video
//         source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // Replace with actual video URL
//         style={styles.video}
//         controls
//         resizeMode="contain"
//       />
//       {movie?.title && <Text style={styles.title}>{movie.title}</Text>}
     
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   vcontainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#003366",
//     paddingHorizontal: 10,
//   },
//   video: {
//     width: "90%",
//     height: 250,
//     alignSelf: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center",
//     marginTop: 10,
//   },
// });

// export default MovieDetails;





import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
 import Video from "react-native-video";
 import Icon from "react-native-vector-icons/Ionicons";
 import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const MovieDetails = ({route,navigation}) => {
  const { movie } = route.params || {};


  return (
    <ScrollView style={styles.container}>
      {/* Video or Image Banner */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <Video
        source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // Replace with actual video URL
        style={styles.banner}
        controls
        resizeMode="contain"
      />

  

      {/* Movie Info */}
      <View style={styles.movieInfo}>
        <Text style={styles.badge}>Premium</Text>
        <Text style={styles.badge}>U/A 16+</Text>
      </View>
      {movie?.title && <Text style={styles.title}>{movie.title}</Text>}
      {/* <Text style={styles.title}>BRAHMA-ANANDAM</Text> */}
      <Text style={styles.subtitle}>2025 • 2hr 28min • Drama</Text>
      <Text style={styles.genre}>Humorous</Text>

      {/* Movie Description */}
      <Text style={styles.description}>
      Devara: Part 1" is a 2024 Indian Telugu-language action drama film starring Jr. NTR, Saif Ali Khan, and Janhvi Kapoor, directed by Koratala Siva, set against a coastal backdrop, and follows Devara, a chieftain, who feuds with Bhaira over arms smuggling
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.trailerButton}>
          <Text style={styles.buttonText}>Play Trailer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subscribeButton}   onPress={() => navigation.navigate("Subscription")}>
          <Text style={styles.subscribeText}>Subscribe</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In */}
      <Text style={styles.signInText}>
        Already have an account? <Text style={styles.signInLink}>Sign In</Text>
      </Text>

    
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  backButton: {
    position: "absolute",
    top: 20, // Adjust for status bar height
    left: 16,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)", // Optional background
    padding: 10,
    borderRadius: 20,
  },
  banner: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  movieInfo: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 16,
  },
  badge: {
    backgroundColor: "#FF9800",
    color: "#fff",
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    marginRight: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 16,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa",
    marginLeft: 16,
  },
  genre: {
    fontSize: 16,
    color: "#FF9800",
    marginLeft: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  trailerButton: {
    backgroundColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  subscribeButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  subscribeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInText: {
    color: "#aaa",
    textAlign: "center",
    marginVertical: 10,
  },
  signInLink: {
    color: "#FF9800",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 16,
    marginTop: 20,
    fontWeight: "bold",
  },
  castContainer: {
    alignItems: "center",
    margin: 10,
  },
  castImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  castName: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
});

export default MovieDetails;
