import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView from "react-native-maps";

const GoogleLocation = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 6.6018,
    longitude: 3.3515,
    latitudeDelta: Platform.OS === "android" ? 0.07 : 0.06,
    longitudeDelta: Platform.OS === "android" ? 0.07 : 0.06,
  });

  return (
    <View style={styles.mapContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search or move the map"
        onPress={(data, details = null) => {
          console.log(JSON.stringify(data));
          console.log(JSON.stringify(details?.geometry?.location));
        }}
        fetchDetails={true}
        query={{
          key:
            Platform.OS === "android"
              ? process.env.EXPO_PUBLIC_GOOGLE_API_KEY_ANDROID
              : process.env.EXPO_PUBLIC_GOOGLE_API_KEY_IOS,
          language: "en",
        }}
        renderLeftButton={() => (
          <View style={styles.searchIcon}>
            <Ionicons
              name="search-outline"
              size={20}
              color={Colors.medium}
            />
          </View>
        )}
        // onFail={e => console.log(e)}
        styles={{
          container: styles.autoCompleteContainer,
          textInput: styles.textInput,
          listView: styles.autoCompleteListView,
        }}
      />
      <MapView style={styles.map} region={location} />
      <View style={styles.absoluteBox}>
        <TouchableOpacity
          style={styles.boxButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.boxText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoogleLocation;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  boxButton: {
    backgroundColor: Colors.primary,
    padding: "5%",
    margin: "5%",
    borderRadius: 10,
  },
  boxText: {
    color: Colors.plain,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  autoCompleteContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    zIndex: 1,
  },
  searchIcon: {
    position: "absolute",
    left: 6,
    top: 12,
    zIndex: 1,

  },
  textInput: {
    backgroundColor: Colors.plain,
    paddingLeft: "8%",
    color: Colors.medium,
  },
  autoCompleteListView: {
    backgroundColor: Colors.lightGrey,
    color: Colors.primary,
  },
});
