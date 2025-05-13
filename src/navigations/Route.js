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
import Login from '../view/Login';
import Signup from '../view/Signup';
import Subscription from '../commponents/Subscription';

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
                   <Stack.Screen name='login' component={Login}/>
                   <Stack.Screen name='signup' component={Signup}/>
                   {/* <Stack.Screen name='signup' componen={Signup}/> */}
                  <Stack.Screen name="Bottom" component={BottomNavigation} />
                  <Stack.Screen name='movielist' component={MovieList}/>
                 <Stack.Screen name="MovieDetails" component={MovieDetails} />
                 <Stack.Screen name='Subscription' component={Subscription}/>
        

        </Stack.Navigator>
    );
};




const DrawerScreen = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => (
                    <DrawerContentScrollView
                        {...props}
                        contentContainerStyle={styles.drawerGradient}
                    >
                        {/* User Profile Section */}
                        <View style={styles.profileSection}>
                          <Image source={require('../assets/images/singam.jpg')} style={styles.avatar} />
                            <TouchableOpacity style={styles.editIcon}>
                                <Feather name="edit" size={18} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Menu Items */}
                        <View style={styles.menuSection}>
                            <DrawerItemList {...props} />
                        </View>

                        {/* Divider */}
                        <View style={styles.divider} />

                        {/* Extra Menu Items */}
                        {[
                            { label: 'Terms & Conditions', icon: 'shield' },
                            { label: 'Privacy Policy', icon: 'shield' },
                            { label: 'Refund Policy', icon: 'lock' },
                            { label: 'Contact Us', icon: 'person' },
                        ].map((item, idx) => (
                            <DrawerItem
                                key={idx}
                                label={item.label}
                                labelStyle={styles.drawerLabel}
                                icon={({ color }) => <Octicons name={item.icon} size={20} color="white" />}
                                onPress={() => {}}
                            />
                        ))}

                        {/* Social Icons */}
                        <View style={styles.socialIcons}>
                            <Entypo name="facebook" size={30} color="#fff" />
                            <Entypo name="youtube" size={24} color="white" />
                            <Entypo name="instagram" size={24} color="white" />
                            <Entypo name="twitter" size={24} color="white" />
                        </View>

                        {/* Footer */}
                        {/* <Text style={styles.footerText}>
                            Copyrights © 2024 <Text style={styles.linkText}>MoviePay.com</Text>
                            {"\n"}All Rights Reserved
                        </Text> */}
                    </DrawerContentScrollView>
                )}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#4B2C91', // fallback
                        width: 260,
                    },
                    headerShown: false,
                    drawerLabelStyle: styles.drawerLabel,
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={StackNavigation}
                    options={{
                        drawerIcon: () => <Entypo name="home" size={30} color="white" />,
                    }}
                />
                <Drawer.Screen
                    name="Movies"
                    component={SearchScreen}
                    options={{
                        drawerIcon: () => <EvilIcons name="search" size={30} color="white" />,
                    }}
                />
                <Drawer.Screen
                    name="My Tickets"
                    component={TicketsScreen}
                    options={{
                        drawerIcon: () => <MaterialIcons name="airplane-ticket" size={30} color="white" />,
                    }}
                />
                <Drawer.Screen
                    name="Wallet"
                    component={WalletScreen}
                    options={{
                        drawerIcon: () => <Entypo name="wallet" size={30} color="white" />,
                    }}
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
    drawerGradient: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#003366', // Deep purple
    },
    profileSection: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#003366',
        position: 'relative',
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    editIcon: {
       position: "absolute",
        marginLeft: 100,
       marginTop:80,
        backgroundColor: "#003366",
        width: 38,
        height: 38,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "white",
       




       
    },
    menuSection: {
        marginTop: 10,
    },
    drawerLabel: {
        color: 'white',
        fontSize: 14,
        marginLeft: -10,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff33',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        marginHorizontal: 20,
    },
    footerText: {
        color: '#ccc',
        fontSize: 12,
        textAlign: 'center',
        paddingBottom: 15,
    },
    linkText: {
        color: '#a0e9ff',
    },
});

