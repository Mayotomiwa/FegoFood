import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export type Ref = BottomSheetModal;
const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0.5}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      overDragResistanceFactor={0.5}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackDrop}
      backgroundStyle={styles.bottomSheet}
      handleIndicatorStyle={{ display: "none" }}
    >
      <View style={styles.container}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive} onPress={() => {}}>
            {/* toggle from here */}
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          {/* to here and vice versa */}
          <TouchableOpacity style={styles.toggleInactive} onPress={() => {}}>
            <Text style={styles.inactiveText}>PickUp</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text style={styles.subHeader}>Your Location</Text>
            <Link href={"/(modal)/GoogleLocation"} asChild>
              <TouchableOpacity
                onPress={() => {
                  Platform.OS === "android" ? dismiss() : {};
                }}
              >
                <View style={styles.item}>
                  <Ionicons
                    name="location-outline"
                    size={20}
                    color={Colors.medium}
                  />
                  <Text style={styles.itemText}>Current Location</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={Colors.primary}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          </View>
          <View>
            <Text style={styles.subHeader}>Arrival Time</Text>
            <Link href={"/"} asChild>
              <TouchableOpacity>
                <View style={styles.item}>
                  <Ionicons
                    name="stopwatch-outline"
                    size={20}
                    color={Colors.medium}
                  />
                  <Text style={styles.itemText}>Now</Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={Colors.primary}
                  />
                </View>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
  },
  bottomSheet: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 0,
    zIndex: 0,
  },
  toggle: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginBottom: "3%",
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: "2%",
    borderRadius: 20,
    paddingHorizontal: "8%",
  },
  activeText: {
    color: Colors.plain,
    fontWeight: "bold",
  },
  toggleInactive: {
    padding: "2%",
    borderRadius: 20,
  },
  inactiveText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 14,
  },
  item: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: Colors.plain,
    padding: "5%",
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  itemText: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: "5%",
    borderRadius: 8,
    margin: "5%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.plain,
    fontWeight: "bold",
  },
});

export default BottomSheet;
