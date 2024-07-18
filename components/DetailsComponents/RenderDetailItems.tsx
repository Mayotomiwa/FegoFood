import Colors from "@/constants/Colors";
import { Meals } from "@/types/Meals";
import currencyFormatter from "@/utils/CurrencyFormatter";
import { Link } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RenderDetailItems: ListRenderItem<Meals> = ({ item }) => {
  return (
    <Link to={{
      screen:`/(page)/ProductDetailsScreen`,
      params: {productId: item.id}
      }}>
      <TouchableOpacity style={styles.renderDetails}>
        <View style={styles.renderDetailsText}>
          <Text style={styles.dishName}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishPrice}>{currencyFormatter(item.price)}</Text>
        </View>
        <Image source={item.img} style={styles.renderDetailsImage} />
      </TouchableOpacity>
    </Link>
  );
};

export default RenderDetailItems;

const styles = StyleSheet.create({
  renderDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  renderDetailsText: {
    flex: 1,
  },
  dishName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dishText: {
    fontSize: 14,
    color: Colors.medium,
    paddingVertical: 4,
  },
  dishPrice: {
    fontWeight: "bold",
    color: Colors.primary,
  },
  renderDetailsImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
