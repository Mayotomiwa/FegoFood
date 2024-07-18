// import { restaurant } from "@/assets/data/restaurant";
// import Colors from "@/constants/Colors";
// import ParallaxScrollView from "@/utils/ParallaxScrollView";
// import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from "expo-router";
// import React, { useLayoutEffect } from "react";
// import currencyFormatter from "@/utils/CurrencyFormatter";
// import {
//   Image,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { Meals } from "@/types/Meals"; // Assuming Meals type definition

// const Product: React.FC = () => {
//   const navigation = useNavigation();
//   const mealsList: Meals[] = restaurant.food.flatMap((cat) => cat.meals);

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTransparent: true,
//       headerTitle: "",
//       headerTintColor: Colors.primary,
//       headerLeft: () => (
//         <TouchableOpacity
//           style={styles.roundButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Ionicons name="arrow-back" size={25} color={Colors.primary} />
//         </TouchableOpacity>
//       ),
//       headerRight: () => (
//         <View style={styles.bar}>
//           <TouchableOpacity
//             style={styles.roundButton}
//             onPress={() => navigation.goBack()}
//           >
//             <Ionicons name="share-outline" size={25} color={Colors.primary} />
//           </TouchableOpacity>
//         </View>
//       ),
//     });
//   }, [navigation]);

//   return (
//     <>
//       {mealsList.map((category) => (
//         <ParallaxScrollView
//           key={category.name} // Ensure each category has a unique key
//           scrollEventThrottle={16}
//           parallaxHeaderHeight={Platform.OS === "android" ? 200 : 250}
//           stickyHeaderHeight={Platform.OS === "android" ? 80 : 100}
//           backgroundColor={Colors.plain}
//           contentBackgroundColor={Colors.lightGrey}
//           style={{ flex: 1 }}
//           renderForeground={() => <View></View>}
//           renderStickyHeader={() => (
//             <View key={`sticky-header-${category.name}`} style={styles.stickySection}>
//               <Text style={styles.stickySectionText}>{category.name}</Text>
//             </View>
//           )}
//           renderBackground={() => (
//             <Image source={category.img} style={styles.imageStyles} />
//           )}
//         >
//           {category.meals.map((item) => (
//             <TouchableOpacity
//               key={item.id} // Ensure each item has a unique key
//               style={styles.renderDetails}
//               onPress={() => navigateToDetail(item.id)}
//             >
//               <View style={styles.renderDetailsText}>
//                 <Text style={styles.dishName}>{item.name}</Text>
//                 <Text style={styles.dishText}>{item.info}</Text>
//                 <Text style={styles.dishPrice}>{currencyFormatter(item.price)}</Text>
//               </View>
//               <Image source={item.img} style={styles.renderDetailsImage} />
//             </TouchableOpacity>
//           ))}
//         </ParallaxScrollView>
//       ))}
//     </>
//   );
// };

// export default Product;

// const styles = StyleSheet.create({
//   stickySection: {
//     backgroundColor: Colors.plain,
//     marginLeft: "20%",
//     height: Platform.OS === "android" ? 75 : 95,
//     justifyContent: "flex-end",
//   },
//   stickySectionText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     margin: "3%",
//   },
//   roundButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: Colors.plain,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   bar: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 10,
//   },
//   imageStyles: {
//     width: "100%",
//     height: 300,
//   },
//   renderDetails: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginHorizontal: 16,
//     marginVertical: 8,
//   },
//   renderDetailsText: {
//     flex: 1,
//   },
//   dishName: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   dishText: {
//     fontSize: 14,
//     color: Colors.medium,
//     paddingVertical: 4,
//   },
//   dishPrice: {
//     fontWeight: "bold",
//     color: Colors.primary,
//   },
//   renderDetailsImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 4,
//   },
// });
