import CategoriesScroller from "@/components/HomeComponents/CategoriesScroller";
import Restaurants from "@/components/HomeComponents/Restaurants";
import Colors from "@/constants/Colors";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <CategoriesScroller />
          <Text style={styles.header}>Top Picks In Your Neighborhood</Text>
          <Restaurants />
          <Text style={styles.header}>Recently Added</Text>
          <Restaurants />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    paddingVertical: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});
