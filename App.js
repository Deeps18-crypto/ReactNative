import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "./Header";

export default function App() {
  const [items, setItems] = useState([
    { name: "Code every day", id: "1" },
    { name: "have a coffee", id: "2" },
    { name: "achieve the dreams", id: "3" },
    { name: "work @ google", id: "4" },
    { name: "enjoy every single minute", id: "5" },
    { name: "dreams future", id: "6" },
  ]);
  // const handerChange = (id) => {
  //   console.log(id);
  //   setItems(items.filter((item) => item.id != id));
  // };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={items}
            keyExtractor={(items) => items.id}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "white",
  },
  header: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    margin: 20,
    padding: 30,
  },
});
