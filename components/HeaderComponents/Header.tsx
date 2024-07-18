import BottomSheet from "@/components/HeaderComponents/BottomSheet";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import React, { useRef } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchBar from "./SearchBar";

const Header = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            source={require("@/assets/images/bike.png")}
            style={styles.bike}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal} style={styles.title}>
          <Text style={styles.titleText}>Delivery · Now</Text>
          <View style={styles.locationText}>
            <Text style={styles.subtitle}>Select Location</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <Link href={"/(modal)/signin"} asChild>
          <TouchableOpacity onPress={() => {}} style={styles.profileBtn}>
            <Ionicons name="person-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.plain,
    marginTop: Platform.OS === "android" ? "10%" : 0,
  },
  container: {
    height: 60,
    backgroundColor: Colors.plain,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  bike: {
    width: 30,
    height: 30,
  },
  title: {
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationText: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileBtn: {
    backgroundColor: Colors.lightGrey,
    padding: "3%",
    borderRadius: 50,
  },
});
