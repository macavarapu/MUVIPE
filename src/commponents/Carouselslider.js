
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const CarouselsliderScreen = () => {
    const screenWidth = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);
    const FlatListRef = useRef();

    const CarouselData = [
        { id: "01", image: require("../assets/banners/1.jpg") },
        { id: "02", image: require("../assets/banners/2.jpg") },
        { id: "03", image: require("../assets/banners/3.jpg") },
        { id: "04", image: require("../assets/banners/4.jpeg") },
        { id: "05", image: require("../assets/banners/5.jpg") },
        { id: "06", image: require("../assets/banners/6.jpg") },
        { id: "07", image: require("../assets/banners/7.jpg") },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = (activeIndex + 1) % CarouselData.length;
            FlatListRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
            setActiveIndex(nextIndex);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [activeIndex]); // Dependency array to update state properly

    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    });

    const renderItem = ({ item }) => (
        <View>
            <Image source={item.image} style={{ height: 200, width: screenWidth }} />
        </View>
    );

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth); // Ensure whole numbers
        setActiveIndex(index);
    };

    const renderDotIndicators = () => {
        return CarouselData.map((dot, index) => (
            <View
                key={index}
                style={{
                    height: 10,
                    width: 10,
                    backgroundColor: activeIndex === index ? "green" : "white",
                    borderRadius: 5,
                    marginHorizontal: 6,
                }}
            />
        ));
    };

    return (
        <View style={{flex:2}}>
            <FlatList
                data={CarouselData}
                ref={FlatListRef}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                initialScrollIndex={0}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            />
            <View style={{flex:5, flexDirection: "row", justifyContent: "center",  marginTop:10}}>
                {renderDotIndicators()}
            </View>
        </View>
    );
};

export default CarouselsliderScreen;

const styles = StyleSheet.create({});


