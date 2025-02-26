import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MovieDetails = ({ route }) => {
  const { movie } = route.params; // Get movie data from navigation

  return (
    <View style={styles.container}>
      <Image source={movie.image} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 10,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default MovieDetails;
