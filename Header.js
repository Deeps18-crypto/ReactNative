import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header() {
  return (
    <View style={styles.Header}>
      <Text style={styles.text}>MY TODO </Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  Header: {
    paddingTop: 38,
    backgroundColor: "coral",
    height: 80,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
});
