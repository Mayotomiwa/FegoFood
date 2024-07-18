import { restaurant } from "@/assets/data/restaurant";
import RenderDetailItems from "@/components/DetailsComponents/RenderDetailItems";
import Colors from "@/constants/Colors";
import DATA from "@/data/Data";
import ParallaxScrollView from "@/utils/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Image,
  LayoutChangeEvent,
  Platform,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Details = () => {
  const navigation = useNavigation();
  const segmentOpacity = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [coordinates, setCoordinates] = useState<number[]>([]) 

  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<TouchableOpacity[] | Text[]>([]);
  const sectionListRef = useRef<SectionList>(null);
  const parallaxScrollViewRef = useRef<ParallaxScrollView>(null);

  const selectCategory = (index: number) => {
    console.log("selectCategory called with index:", index);
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected.measure((x: number) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });

    filterCategory(index);
  };

  const filterCategory = (sectionIndex: number) => {
    console.log("filterCategory called with sectionIndex:", sectionIndex);
    console.log("Current sectionIndex:", sectionIndex);
  
    if (sectionIndex >= DATA.length - 1) {
      console.log("Reached the end of DATA.");
      return;
    }
  
    const sectionIndexExists = DATA.some(
      (item) => item.key === sectionIndex.toString()
    );
    console.log("sectionIndex exists:", sectionIndexExists);
  
    if (sectionIndexExists) {
      // Update the section index state
      setSectionIndex((prevSectionIndex) => prevSectionIndex + 1);
  
        parallaxScrollViewRef.current?.scrollTo({ x: 0, y:coordinates[sectionIndex], animated: true });
        console.log(parallaxScrollViewRef.current?.scrollTo({ x: 0, y:coordinates[sectionIndex], animated: true }))
    }
  };

  const handleLayout = (sectionIndex: number) => (event: LayoutChangeEvent) => {
    const layout = event.nativeEvent.layout;
    setCoordinates(prevCoordinates => {
      const newCoordinates = [...prevCoordinates];
      newCoordinates[sectionIndex] = layout.y;
      return newCoordinates;
    });
  };
  const onScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    if (y > 300) {
      segmentOpacity.value = withTiming(1);
    } else {
      segmentOpacity.value = withTiming(0);
    }
  };

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: segmentOpacity.value,
  }));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={25} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="share-outline"
              size={25}
              color={Colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.roundButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="search-outline" size={25} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <ParallaxScrollView
        scrollEventThrottle={16}
        ref={parallaxScrollViewRef}
        onScroll={onScroll}
        parallaxHeaderHeight={Platform.OS === "android" ? 200 : 250}
        stickyHeaderHeight={Platform.OS === "android" ? 80 : 100}
        backgroundColor={Colors.plain}
        contentBackgroundColor={Colors.lightGrey}
        style={{ flex: 1 }}
        renderForeground={() => <View></View>}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
        renderBackground={() => (
          <Image source={restaurant.img} style={styles.imageStyles} />
        )}
      >
        <View style={styles.detailsContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>
            {restaurant.delivery} ·
            {restaurant.tags.map(
              (tag, index) =>
                `${tag}${index < restaurant.tags.length - 1 ? " · " : ""}`
            )}{" "}
          </Text>
          <Text style={styles.restaurantDescription}>{restaurant.about}</Text>
          <SectionList
            contentContainerStyle={styles.sectionList}
            keyExtractor={(item) => `${item.id}`}
            initialScrollIndex={sectionIndex}
            scrollEnabled={false}
            ref={sectionListRef}
            sections={DATA}
            renderItem={RenderDetailItems}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            SectionSeparatorComponent={() => <View style={styles.separator} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader} onLayout={() => handleLayout(sectionIndex)}>{title}</Text>
            )}
          />
        </View>
      </ParallaxScrollView>
      <Animated.View style={[styles.stickySegment, animatedStyles]}>
        <View style={styles.segmentShadow}>
          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.segmentScrollView}
          >
            {DATA.map((item, index) => (
              <TouchableOpacity
                ref={(ref) => (itemsRef.current[index] = ref!)}
                key={item.key}
                onPress={() => {
                  selectCategory(index);
                }}
                style={
                  activeIndex === index
                    ? styles.segmentButtonActive
                    : styles.segmentButton
                }
              >
                <Text
                  style={
                    activeIndex === index
                      ? styles.segmentTextActive
                      : styles.segmentText
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Animated.View>
    </>
  );
};

export default Details;


const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: Colors.plain,
    marginLeft: "20%",
    height: Platform.OS === "android" ? 75 : 95,
    justifyContent: "flex-end",
  },
  stickySectionText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "3%",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.plain,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  imageStyles: {
    width: "100%",
    height: 300,
  },
  restaurantName: {
    fontSize: 24,
    margin: 16,
  },
  restaurantDescription: {
    fontSize: 16,
    margin: 12,
    lineHeight: 22,
    color: Colors.medium,
  },
  sectionList: {
    paddingBottom: 50,
    margin: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    margin: 12,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.grey,
    marginHorizontal: 12,
  },
  stickySegment: {
    position: "absolute",
    height: 60,
    left: 0,
    right: 0,
    top: Platform.OS === "android" ? 80 : 100,
    backgroundColor: Colors.plain,
  },
  segmentShadow: {
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: Colors.plain,
    shadowColor: Colors.notplain,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 5,
  },
  segmentButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  segmentButtonActive: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 50,
  },
  segmentText: {
    color: Colors.primary,
    fontSize: 16,
  },
  segmentTextActive: {
    color: Colors.plain,
    fontWeight: "bold",
    fontSize: 16,
  },
  segmentScrollView: {
    paddingHorizontal: 16,
  },
});
