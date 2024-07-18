import { getDishById } from "@/assets/data/restaurant";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type RootStackParamList = {
    productDetails: { productId: number };
  };
type ProductDetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'productDetails'>;
};

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({ route }) => {
  const { productId } = route.params;
  const dish = getDishById(productId);

  return (
    <View style={styles.container}>
      <Image source={dish?.img} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{dish?.name}</Text>
        <Text style={styles.info}>{dish?.info}</Text>
        <Text style={styles.price}>Price: ${dish?.price.toFixed(2)}</Text>
        {/* Additional details as needed */}
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  details: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 12,
    color: "#666",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 8,
  },
  // Add more styles as needed
});
