
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const movies = [
  { id: "1", title: "DEVERA", image: require("../assets/images/devera.jpg") },
  { id: "2", title: "Thaldel", image: require("../assets/images/th.jpg") },
  { id: "3", title: "Daaku Maharaaj", image: require("../assets/images/Daaku.jpg") },
  { id: "4", title: "Sankranthiki Vasthunam", image: require("../assets/images/San.jpg") },
  { id: "5", title: "Virupaksha", image: require("../assets/images/ve.jpg") },
  { id: "6", title: "Temper", image: require("../assets/images/temper.jpg") },
  { id: "7", title: "Ala Vaikunthapurramuloo", image: require("../assets/images/ala.jpg") },
  { id: "8", title: "BIMBISARA", image: require("../assets/images/bm.jpg") },
  { id: "9", title: "K", image: require("../assets/images/ka.jpg") },
  { id: "10", title: "Love Story", image: require("../assets/images/love.jpg") },
];

const MovieCard = ({ item}) => {
  const navigation = useNavigation();
  return(
    <View style={styles.card}>
    <TouchableOpacity onPress={()=>navigation.navigate('MovieDetails', {movie: item})}>
      <Image source={item.image} style={styles.image} />
    </TouchableOpacity>
    <Text style={styles.title}>{item.title}</Text>
  </View>
  );
  
};

const MovieList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
      ) : (
        <>

          <FlatList
            data={movies}
            // renderItem={({ item }) => <MovieCard item={item} />}
            renderItem={({ item }) => <MovieCard item={item} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={styles.row}
            initialNumToRender={6}
            removeClippedSubviews={true}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#003366",
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#003366",
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 5,
    marginBottom: 10,
    width: "30%", // Adjust width for 3 columns
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  title: {
    padding: 5,
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});

export default MovieList;



