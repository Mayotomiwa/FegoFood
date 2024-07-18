import Colors from "@/constants/Colors";
import { RenderItemProps } from "@/types/RenderItemProps";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const RenderItem: React.FC<RenderItemProps> = ({
  item,
  index,
  items,
  setItems,
}) => {
  const handleCheck = () => {
    const updatedItems = items.map((currentItem, currentIndex) => {
      if (currentIndex === index) {
        return { ...currentItem, checked: !currentItem.checked };
      }
      return currentItem;
    });
    setItems(updatedItems);
  };

  return (
    <View style={styles.row}>
      <Text style={styles.itemRowText}>
        {item.name} ({item.count})
      </Text>
      <View>
        <BouncyCheckbox
          fillColor={Colors.primary}
          unFillColor={Colors.plain}
          isChecked={item.checked}
          iconStyle={styles.iconStyle}
          innerIconStyle={styles.innerIconStyle}
          onPress={handleCheck}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: "5%",
    backgroundColor: Colors.plain,
  },
  itemRowText: {
    flex: 1,
  },
  iconStyle: {
    borderColor: Colors.primary,
    borderRadius: 4,
    borderWidth: 1,
  },
  innerIconStyle: {
    borderColor: Colors.primary,
    borderRadius: 4,
  },
});
