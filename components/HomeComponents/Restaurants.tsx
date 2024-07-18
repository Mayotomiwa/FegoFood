import { restaurants } from "@/assets/data/home";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.category}
    >
      {restaurants.map((restaurant, index) => (
        <Link href={"/(page)/details"} key={index} asChild>
          <TouchableOpacity>
            <View style={styles.categoryCard}>
              <Image source={restaurant.img} style={styles.imageContainer} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{restaurant.name}</Text>
                <Text style={styles.categoryRating}>
                  {restaurant.rating} {restaurant.ratings}
                </Text>
                <Text style={{ color: Colors.medium }}>
                  {restaurant.distance}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 15,
  },
  category: {},
  categoryCard: {
    width: 300,
    height: 250,
    backgroundColor: Colors.plain,
    margin: 10,
    borderRadius: 4,
    elevation: Platform.OS === "android" ? 5 : 2,
    shadowColor: Colors.notplain,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
  },
  imageContainer: {
    flex: 5,
    width: undefined,
    height: undefined,
  },
  categoryText: {
    paddingVertical: 7,
    fontSize: 14,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryBox: {
    flex: 3,
    padding: 10,
  },
  categoryRating: {
    color: Colors.green,
  },
});
