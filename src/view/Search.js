
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import HeaderScreen from '../commponents/Header';

const SearchScreen = () => {
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

  const [searchText, setSearchText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (text) => {
    setSearchText(text);
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen title={"Search"} />
      {/* <Text style={styles.title}>Search</Text> */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search here"
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.movieImage} />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003366",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    height: 50,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  movieImage: {
    width: 150,
    height: 220,
    borderRadius: 10,
  },
  movieTitle: {
    color: "white",
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
});




// import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput,FlatList } from 'react-native'
// import React from 'react'
// import HeaderScreen from '../commponents/Header';
// import { useState } from 'react';

// const SearchScreen = () => {
//   const movies = [
//     { id: "1", title: "DEVERA", image: require("../assets/images/devera.jpg") },
//     { id: "2", title: "Singam", image: require("../assets/images/th.jpg") },
//     { id: "3", title: "Daaku Maharaaj", image: require("../assets/images/Daaku.jpg") },
//     { id: "4", title: "Sankranthiki Vasthunam", image: require("../assets/images/San.jpg") },
//     { id: "5", title: "Virupaksha", image: require("../assets/images/ve.jpg") },
//     { id: "6", title: "Temper", image: require("../assets/images/temper.jpg") },
//     { id: "7", title: "Ala Vaikunthapurramuloo", image: require("../assets/images/ala.jpg") },
//     { id: "8", title: "BIMBISARA", image: require("../assets/images/bm.jpg") },
//     { id: "9", title: "K", image: require("../assets/images/ka.jpg") },
//     { id: "10", title: "Love Story", image: require("../assets/images/love.jpg") },
//   ];
//   const [searchText, setSearchText] = useState('');
//   const [filteredMovies, setFilteredMovies] = useState(movies);
//   const handleSearch = (text) => {
//     setSearchText(text);
//     setFilteredMovies(movies.filter((movie) => movie.title.toLowerCase().includes(text.toLowerCase())));
//   };
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#003366" }}>

//       <HeaderScreen title={"MUVIPE"} />
//       <View>
//         <Text style={styles.title}>Search</Text>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search here"
//           value={searchText}
//           onChangeText={handleSearch}
//         />
//           {/* <FlatList
//                     data={movies}
//                     renderItem={({ item }) => <MovieCard item={item} />}
//                     keyExtractor={(item) => item.id}
//                     numColumns={2}
//                     columnWrapperStyle={styles.row}
//                     initialNumToRender={4} 
//                     removeClippedSubviews={true}
//                   /> */}
//          <FlatList
//         data={filteredMovies}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Image source={{ uri: item.image }} style={styles.movieImage} />
//             <Text style={styles.movieTitle}>{item.title}</Text>
//           </View>
//         )}
//       />
//       </View>



//     </SafeAreaView>
//   )
// }

// export default SearchScreen

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 24,
//     color: 'white',
//     textAlign: 'center',
//     marginVertical: 10
//   },
//   searchInput: { 
//     backgroundColor: 'white',
//      borderRadius: 8,
//      padding: 20,
//       marginBottom: 10, 
//       width:"100%",
//       height:70,
//       margin:10,
      
//     },
//     card: { flex: 1, margin: 5, alignItems: 'center' },
//     movieImage: { width: 150, height: 220, borderRadius: 10 },
//     movieTitle: { color: 'white', marginTop: 5, fontSize: 14, textAlign: 'center' },

// })