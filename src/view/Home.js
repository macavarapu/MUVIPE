
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import HeaderScreen from '../commponents/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeTabScreen from '../Tabes/Hometabs';
import WebseriesTabScreen from '../Tabes/Webseriestab';
import MyticketTabScreen from '../Tabes/Mytickettab';
import MovieTabsScreen from '../Tabes/Movies';
import CarouselsliderScreen from '../commponents/Carouselslider';
import MovieList from '../commponents/movies';

const Tabs = createMaterialTopTabNavigator();

const MaterialTopTabsScreen = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#003366' },
                tabBarActiveTintColor: 'white',
                tabBarLabelStyle: { fontSize: 18 },
                tabBarIndicatorStyle: { backgroundColor: '#E96E6E' },
            }}
        >
            <Tabs.Screen name="Home" component={HomeTabScreen} />
            <Tabs.Screen name="Movie" component={MovieTabsScreen} />
            <Tabs.Screen name="Webseries" component={WebseriesTabScreen} />
            <Tabs.Screen name="My Ticket" component={MyticketTabScreen} />
        </Tabs.Navigator>
    );
};

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#003366" }}>
            <View>
                <HeaderScreen title="MUVIPE" />
            </View>
            <View style={{ flex: 1 }}>
                <MaterialTopTabsScreen />
                <CarouselsliderScreen />
                <MovieList/>
            </View>

        </View>
        // <SafeAreaView style={styles.container}>
        //     <HeaderScreen title="MUVIPE" />

        //     <View style={{flex:1}}>
        //         <MaterialTopTabsScreen />
        //     </View>

        //       <View  > 
        //         <CarouselsliderScreen />
        //     </View>
        //     <View style={{flex:1}}>
        //         <MovieList/>
        //     </View>
        // </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#003366",
    },
    sliderContainer: {

        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    // tabsContainer: {
    //    flex: 1, 
    // },
});

