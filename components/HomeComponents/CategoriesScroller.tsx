import { categories } from "@/assets/data/home";
import Colors from "@/constants/Colors";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

const CategoriesScroller = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.category}
    >
      {categories.map((category, index) => (
        <View style={styles.categoryCard} key={index}>
          <Image source={category.img} />
          <Text style={styles.categoryText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoriesScroller;

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 15,
  },
  category: {},
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: Colors.plain,
    margin: 10,
    borderRadius: 4,
    elevation: 2,
    shadowColor: Colors.notplain,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
  },
  categoryText: {
    padding: 6,
    fontSize: 14,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
});
