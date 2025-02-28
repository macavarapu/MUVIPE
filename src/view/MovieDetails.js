
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Share,
//   Image,
// } from "react-native";
// import Video from "react-native-video";
// import { useNavigation } from "@react-navigation/native";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Orientation from "react-native-orientation-locker";

// const MovieDetails = ({ route }) => {
//   const { movie } = route.params;
//   const navigation = useNavigation();
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   // Toggle Fullscreen
//   const toggleFullScreen = () => {
//     if (isFullScreen) {
//       Orientation.unlockAllOrientations();
//     } else {
//       Orientation.lockToLandscape();
//     }
//     setIsFullScreen(!isFullScreen);
//   };

//   // Share Movie
//   const shareMovie = async () => {
//     try {
//       await Share.share({
//         message: `Check out this movie: ${movie.title} - ${movie.description}`,
//       });
//     } catch (error) {
//       console.error("Error sharing movie:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => navigation.goBack()}
//       >
//         <Ionicons name="arrow-back" size={30} color="white" />
//       </TouchableOpacity>

//       {/* Video Player */}
//       <View style={styles.videoContainer}>
//         <Video
//           source={{
//             uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
//           }}
//           style={styles.video}
//           controls={true}
//           resizeMode="contain"
//           fullscreen={isFullScreen}
//           onFullscreenPlayerWillDismiss={() => setIsFullScreen(false)}
//         />
//         {/* Fullscreen Button */}
//         <TouchableOpacity style={styles.fullScreenButton} onPress={toggleFullScreen}>
//           <Ionicons name="expand" size={30} color="white" />
//         </TouchableOpacity>
//       </View>

//       {/* Movie Title */}
//       <Text style={styles.title}>{movie.title}</Text>

//       {/* Movie Actions */}
//       <View style={styles.actions}>
//         <TouchableOpacity onPress={() => console.log("Add to Watchlist")}>
//           <Ionicons name="bookmark-outline" size={30} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={shareMovie}>
//           <Ionicons name="share-social-outline" size={30} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => console.log("Download Movie")}>
//           <Ionicons name="download-outline" size={30} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => console.log("Rate Movie")}>
//           <Ionicons name="star-outline" size={30} color="white" />
//         </TouchableOpacity>
//       </View>

//       {/* Movie Description */}
//       <Text style={styles.description}>{movie.description}</Text>

//       {/* Watch Now Button */}
//       <TouchableOpacity style={styles.watchNowButton}>
//         <Text style={styles.watchNowText}>Watch Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#003366",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//   },
//   backButton: {
//     position: "absolute",
//     top: 30,
//     left: 20,
//     zIndex: 10,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     padding: 10,
//     borderRadius: 50,
//   },
//   videoContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   video: {
//     width: "100%",
//     height: 210,
//   },
//   fullScreenButton: {
//     position: "absolute",
//     bottom: 10,
//     right: 20,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     padding: 10,
//     borderRadius: 50,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center",
//     marginTop: 10,
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginVertical: 10,
//   },
//   description: {
//     color: "white",
//     fontSize: 16,
//     textAlign: "center",
//     padding: 10,
//   },
//   watchNowButton: {
//     backgroundColor: "#ff6600",
//     paddingVertical: 10,
//     marginHorizontal: 50,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   watchNowText: {
//     fontSize: 18,
//     color: "white",
//     fontWeight: "bold",
//   },
// });

// export default MovieDetails;





import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Video from "react-native-video";
import { useNavigation } from "@react-navigation/native"; // Import navigation
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Icons

const MovieDetails = ({ route }) => {
  const { movie } = route.params; // Get movie data from navigation
  const navigation = useNavigation(); // Access navigation

  return (
    <View style={styles.container}>
  

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      {/* Video Player */}
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }} // Replace with your video URL
          style={styles.video}
          controls={true} // Enables play, pause, seek, fullscreen
          resizeMode="contain"
        />
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
   
    top: 30,
    left: 20,
    zIndex: 10, // Ensure it stays above other elements
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    padding: 10,
    borderRadius: 50,
  },
  videoContainer: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  video: {
    width: "100%",
    height: 210,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});

export default MovieDetails;







// import React from "react";
// import { View, Text, Image, StyleSheet } from "react-native";
// import Video from "react-native-video";

// const MovieDetails = ({ route }) => {
//   const { movie } = route.params; // Get movie data from navigation

//   return (

//     <View style={styles.vcontainer}>
//     <Video
//       source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }} // Replace with your video URL
//       style={styles.video}
//       controls={true} // Enables play, pause, seek, fullscreen
//       resizeMode="contain"

//     />
//     <Text style={styles.title}>{movie.title}</Text>
//   </View>
//     // <View style={styles.container}>
//     //   <Image source={movie.image} style={styles.image} />
//     //   <Text style={styles.title}>{movie.title}</Text>
      
//     // </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#003366",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   image: {
//     width: 300,
//     height: 400,
//     borderRadius: 10,
//     resizeMode: "cover",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "white",
//     textAlign: "center",
//   },
//   vcontainer: {
//     flex: 1,
//     //justifyContent: "center",
//     //alignItems: "center",
//     backgroundColor: "#003366",
//   },
//   video: {
//     width: "90%",
//     height: 250,
//   },
// });

// export default MovieDetails;
