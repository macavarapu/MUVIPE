import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Subscription = () => {
      const navigation = useNavigation(); 
  return (
     <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeIcon}>×</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscribe to start watching</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Benefits Button */}
        <TouchableOpacity style={styles.benefitButton}>
          <Text style={styles.benefitText}>🎁 Explore MUVIPE GOLD Benefits</Text>
        </TouchableOpacity>

        {/* Plans Comparison */}
        <View style={styles.planRow}>
          {['GOLD', 'Annual', 'Pocket'].map((title, idx) => (
            <View key={idx} style={styles.planColumn}>
              <Text style={styles.planTitle}>{title}</Text>
              <Text style={styles.planText}>Details here</Text>
              {/* Replace above with dynamic plan data */}
            </View>
          ))}
        </View>

        {/* Plan Boxes */}
        <View style={styles.planBoxContainer}>
          <TouchableOpacity style={[styles.planBox, styles.selectedBox]}>
            <Text style={styles.planBoxTitle}>aha GOLD</Text>
            <Text style={styles.planBoxPrice}>₹999 / Year</Text>
            <Text style={styles.recommendedLabel}>RECOMMENDED</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.planBox}>
            <Text style={styles.planBoxTitle}>Annual Premium</Text>
            <Text style={styles.planBoxPrice}>₹699 / Year</Text>
            <Text style={styles.noAdsLabel}>NO ADS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.planBox}>
            <Text style={styles.planBoxTitle}>Pocket Pack</Text>
            <Text style={styles.planBoxPrice}>₹199 / 3 Months</Text>
            <Text style={styles.monthlyLabel}>BEGINS ₹67/MONTH</Text>
          </TouchableOpacity>
        </View>

        {/* Other Plans */}
        <View style={styles.otherPlan}>
          <Text style={styles.otherText}>
            Annual - Full HD (1080p), Stereo, Limited Ads, Telugu, 1 Year
          </Text>
          <Text style={styles.otherPrice}>₹499 / Year</Text>
        </View>

        {/* Sign In Prompt */}
        <TouchableOpacity>
          <Text style={styles.signInPrompt}>Already have an account? <Text style={{color: '#FFA500'}}>Sign In</Text></Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Subscribe Now Button */}
      <TouchableOpacity style={styles.subscribeBtn}>
        <Text style={styles.subscribeText}>Subscribe Now aha Gold at INR 999</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Subscription

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15 },
  closeIcon: { color: '#fff', fontSize: 24 },
  headerTitle: { color: '#fff', marginLeft: 10, fontSize: 16, fontWeight: '600' },

  contentContainer: { padding: 15 },
  benefitButton: {
    backgroundColor: '#222', padding: 10, borderRadius: 8, marginBottom: 20,
  },
  benefitText: { color: '#FFA500', fontWeight: '600' },

  planRow: { flexDirection: 'row', justifyContent: 'space-between' },
  planColumn: { flex: 1, margin: 5, padding: 10, backgroundColor: '#111', borderRadius: 10 },
  planTitle: { color: '#fff', fontWeight: 'bold', marginBottom: 5 },
  planText: { color: '#aaa', fontSize: 12 },

  planBoxContainer: { marginTop: 20 },
  planBox: {
    padding: 15, marginVertical: 5, borderRadius: 10, backgroundColor: '#1c1c1c'
  },
  selectedBox: { borderColor: '#FFA500', borderWidth: 2 },
  planBoxTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  planBoxPrice: { color: '#fff', fontSize: 14 },
  recommendedLabel: { color: '#FFA500', marginTop: 5 },
  noAdsLabel: { color: 'lightgreen', marginTop: 5 },
  monthlyLabel: { color: 'lightgreen', marginTop: 5 },

  otherPlan: { backgroundColor: '#222', marginTop: 20, padding: 15, borderRadius: 8 },
  otherText: { color: '#ccc', fontSize: 13 },
  otherPrice: { color: '#fff', marginTop: 5, fontWeight: 'bold' },

  signInPrompt: { color: '#aaa', marginTop: 15, textAlign: 'center' },

  subscribeBtn: {
    backgroundColor: '#FF5A00', padding: 15, alignItems: 'center', justifyContent: 'center',
  },
  subscribeText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
