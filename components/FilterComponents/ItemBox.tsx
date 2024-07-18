import Colors from "@/constants/Colors";
import { ItemBoxProps } from "@/types/ItemBoxProps";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ItemBox: React.FC<ItemBoxProps> = ({ handleClearAll }) => {
  return (
    <View>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <Ionicons name="funnel-outline" size={20} color={Colors.medium} />
          <Text style={styles.itemText}>Sort</Text>
          <Ionicons name="chevron-forward" size={25} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <Ionicons name="star-outline" size={20} color={Colors.medium} />
          <Text style={styles.itemText}>Rating</Text>
          <Ionicons name="chevron-forward" size={25} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <Ionicons name="pricetag-outline" size={20} color={Colors.medium} />
          <Text style={styles.itemText}>Offers & Discounts</Text>
          <Ionicons name="chevron-forward" size={25} color={Colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => {}}>
          <Ionicons name="alarm-outline" size={20} color={Colors.medium} />
          <Text style={styles.itemText}>Recently Added</Text>
          <Ionicons name="chevron-forward" size={25} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemHeaderContainer}>
        <Text style={styles.itemHeader}>Categories</Text>
        <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.plain,
    padding: "3%",
    borderRadius: 10,
    marginBottom: "5%",
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: Colors.plain,
    paddingVertical: "5%",
    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
  },
  itemHeaderContainer: {
    flexDirection: "row",
  },
  clearButton: {},
  clearText: {
    color: Colors.primary,
    fontWeight: '600'
  },
  itemHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: "5%",
  },
});
