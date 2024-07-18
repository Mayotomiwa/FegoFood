import categories from "@/assets/data/filter.json";
import ItemBox from "@/components/FilterComponents/ItemBox";
import { RenderItem } from "@/components/FilterComponents/RenderItem";
import Colors from "@/constants/Colors";
import { Category } from "@/types/Category";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Filter: React.FC = () => {
  const navigation = useNavigation();
  const [categoriesData, setCategoriesData] = useState<Category[]>(categories);

  function handleClearAll () {
    const updatedItems = categories.map((currentItem) => ({
      ...currentItem,
      checked: false,
    }));
    setCategoriesData(updatedItems);
  };

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <RenderItem
      item={item}
      index={index}
      items={categoriesData}
      setItems={setCategoriesData}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox handleClearAll={handleClearAll} />}
      />
      <View style={{ height: 80 }} />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fullButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: Colors.plain,
    padding: 10,
    elevation: 20,
    shadowColor: Colors.notplain,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 10,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
  },
  footerText: {
    color: Colors.plain,
    fontWeight: "bold",
    fontSize: 16,
  },
});
