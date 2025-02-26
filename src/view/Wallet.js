import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import HeaderScreen from '../commponents/Header';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const WalletScreen = () => {
  const transactions = [
    { id: "1", title: "Purchase Ticket", amount: "- 100", date: "2025-01-23 11:02:07", icon: "refresh-ccw" },
    { id: "2", title: "Wallet", amount: "+ 100", date: "2025-01-22 12:16:08", icon: "refresh-ccw" },
  ];
  return (
    <SafeAreaView style={{ flex:1,backgroundColor:"#003366" }}>
    
    <HeaderScreen title={"Wallet"}/>
    <View style={styles.walletSection}>
        <Text style={styles.walletText}>Wallet Balance</Text>
        <View style={styles.walletRow}>
          <Text style={styles.amount}>₹0</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>ADD CASH</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.walletSection}>
        <Text style={styles.walletText}>Wallet Balance</Text>
        <View style={styles.walletRow}>
          <Text style={styles.amount}>₹0</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Withdraw Amount</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.card}>
      {/* Left Side - Icon and Text */}
      <View style={styles.leftSection}>
        <FontAwesome name="tag" size={24} color="#FFA500" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>My Offers & Benefits</Text>
          <Text style={styles.subtitle}>View All Offers</Text>
        </View>
      </View>

      {/* Right Arrow */}
      <Entypo name="chevron-right" size={24} color="black" />
    </TouchableOpacity>
      {/* <TouchableOpacity style={styles.offersSection}>
        <Text style={styles.offersTitle}>My Offers & Benefits</Text>
        <Text style={styles.offersSubtitle}>View All Offers</Text>
       
      </TouchableOpacity> */}
    
     
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <Text style={styles.transactionAll}>All Transactions</Text>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionCard}>
            <Entypo name={item.icon} size={30} color="white" />
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionText}>{item.title}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: item.amount.includes("+") ? "green" : "red" }]}>
              {item.amount}
            </Text>
          </View>
        )}
      />

   
  
  
</SafeAreaView>
  )
}

export default WalletScreen

const styles = StyleSheet.create({
  walletSection: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  walletText: { fontSize: 16, color: "black" },
  walletRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 },
  amount: { fontSize: 22, fontWeight: "bold" },
  button: {
    backgroundColor: "#A74AC7",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: { color: "white", fontSize: 14 },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
  },
  // offersSection: {
  //   backgroundColor: "white",
  //   borderRadius: 10,
  //   padding: 15,
  //   margin: 10,
  //   flexDirection:"row",
  //   justifyContent:"space-between"
  // },
  // offersSection: {
  //   backgroundColor: "white",
  //   borderRadius: 10,
  //   padding: 15,
  //   margin: 10,
  // },
  // offersTitle: { fontWeight: "bold", fontSize: 16 },
  // offersSubtitle: { color: "gray", fontSize: 14 },
  // transactionHeader: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginHorizontal: 10,
  //   marginVertical: 10,
  // },
  transactionTitle: { fontSize: 18, fontWeight: "bold", color: "red" },
  transactionAll: { fontSize: 16, color: "red" },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#191919",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  transactionDetails: { flex: 1, marginLeft: 10 },
  transactionText: { fontSize: 16, color: "white", fontWeight: "bold" },
  transactionDate: { fontSize: 12, color: "gray" },
  transactionAmount: { fontSize: 16, fontWeight: "bold" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navText: { color: "gray", fontSize: 14 },
  navTextActive: { color: "purple", fontSize: 14, fontWeight: "bold" },
})