import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            style={styles.searchIcon}
            name="search-outline"
            size={20}
            color={Colors.medium}
          />
          <TextInput
            style={styles.input}
            placeholder="Pastries, Drinks, Dishes"
          />
        </View>
        <Link href={"/(modal)/filter"} asChild>
          <TouchableOpacity style={styles.optionsButton}>
            <Ionicons name="options-outline" size={25} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    backgroundColor: Colors.plain,
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: "3%",
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightGrey,
    borderRadius: 20,
  },
  searchIcon: {
    paddingHorizontal: "2%",
  },
  input: {
    padding: "3%",
    color: Colors.medium,
  },
  optionsButton: {
    padding: "5%",
    backgroundColor: Colors.plain,
  },
});
