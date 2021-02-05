import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function TodoItems({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <MaterialIcons name="cancel" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}

export default TodoItems;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderWidth: 1,
    marginTop: 16,
    borderColor: "#bbb",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
