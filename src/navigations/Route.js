import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from "react-native-vector-icons/Octicons";
import HomeScreen from '../view/Home';
import SearchScreen from '../view/Search';
import WalletScreen from '../view/Wallet';
import TicketsScreen from '../view/Tickets';
import ProfileScreen from '../view/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feather from "react-native-vector-icons/Feather";
// import MovieDetailsScreen from '../view/MovieDetails';
import MovieDetails from '../view/MovieDetails';
import MovieList from '../commponents/movies';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Tabs = createMaterialTopTabNavigator();

// Bottom Tab Navigation
const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: 'black' },
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#E96E6E',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ }) => <Entypo name="home" color="white" size={30} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ }) => <EvilIcons name="search" color="white" size={30} />
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    tabBarIcon: ({ }) => <Entypo name="wallet" color="white" size={30} />
                }}
            />
            <Tab.Screen
                name="Tickets"
                component={TicketsScreen}
                options={{
                    tabBarIcon: () => <MaterialIcons name="airplane-ticket" color="white" size={30} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => <Octicons name="feed-person" color="white" size={30} />
                }}
            />
        </Tab.Navigator>
    );
};

// Stack Navigation
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            header: false,
            headerTitleAlign: "center",

        }}>

            <Stack.Screen name="Bottom" component={BottomNavigation} />
            <Stack.Screen name='movielist' component={MovieList}/>
            <Stack.Screen name="MovieDetails" component={MovieDetails} />

        </Stack.Navigator>
    );
};

// Drawer Navigation
const DrawerScreen = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => {
                    return (
                        <SafeAreaView style={styles.drawerContainer}>
                            {/* User Profile Section */}
                            <View style={styles.profileSection}>
                                <Image source={require('../assets/images/person.png')} style={styles.avatar} />

                                {/* Edit Icon Positioned in the Center of Avatar */}
                                <TouchableOpacity style={styles.editIcon}>
                                    <Feather name="edit" size={18} color="white" />
                                </TouchableOpacity>
                            </View>

                            {/* Drawer Items */}
                            <DrawerItemList {...props} />
                        </SafeAreaView>

                    );

                }}
                screenOptions={{

                    drawerStyle: {
                        backgroundColor: "white",
                        width: 250
                    },
                    headerStyle: {
                        backgroundColor: "white",

                    },
                    headerShown: false,
                    headerTintColor: "black",

                    drawerLabelStyle: {
                        fontSize: 15,
                        color: "black",
                        marginLeft: -10,
                    },

                }} >

                <Drawer.Screen
                    name="Home"
                    options={{
                        drawerLabel: "Home",
                        title: "Home",
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <Entypo name="home" color="black" size={30} />
                        ),
                    }}
                    component={StackNavigation}
                />
                <Drawer.Screen
                    name="Search"
                    options={{
                        drawerLabel: "Search",
                        title: "Search",
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <EvilIcons name="search" color="black" size={30} />
                        ),
                    }}
                    component={SearchScreen}
                />
                <Drawer.Screen
                    name="Wallet"
                    options={{
                        drawerLabel: "Wallet",
                        title: "Wallet",
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <Entypo name="wallet" color="black" size={30} />
                        ),
                    }}
                    component={WalletScreen}
                />
                <Drawer.Screen
                    name="Tickets"
                    options={{
                        drawerLabel: "Tickets",
                        title: "Tickets",
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <MaterialIcons name="airplane-ticket" color="black" size={30} />
                        ),
                    }}
                    component={TicketsScreen}
                />
                <Drawer.Screen
                    name="Profile"
                    options={{
                        drawerLabel: "Profile",
                        title: "Profile",
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <Octicons name="feed-person" color="black" size={30} />
                        ),
                    }}
                    component={ProfileScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};







// Root Component
const Route = () => {
    return <DrawerScreen />;
};

export default Route;

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
    },
    profileSection: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        backgroundColor: "#003366",
        position: "relative",
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 40, // Makes it a circle
        borderWidth: 2,
        borderColor: "white",
    },
    editIcon: {
        position: "absolute",
        marginLeft: 70,

        backgroundColor: "#003366",
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "white",
    },
});

