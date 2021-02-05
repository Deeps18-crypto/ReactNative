import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoItems from "./TodoItems";

export default function App() {
  const [items, setItems] = useState([
    { name: "Code every day", id: "1" },
    { name: "have a coffee", id: "2" },
    { name: "achieve the dreams", id: "3" },
    { name: "work @ google", id: "4" },
    { name: "enjoy every single minute", id: "5" },
    { name: "dreams future", id: "6" },
    { name: "dreams BIG", id: "7" },
  ]);
  const pressHandler = (id) => {
    console.log(id);
    setItems(items.filter((item) => item.id != id));
  };

  const submitHandler = (input) => {
    if (input.length >= 4) {
      setItems((prevTodo) => {
        return [{ name: input, id: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("OOPS", "Todo must be greater than 4 char", [
        { text: "understood" },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={items}
              keyExtractor={(items) => items.id}
              renderItem={({ item }) => (
                <TodoItems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  list: {
    flex: 1,
    marginTop: 40,
  },
  content: {
    padding: 40,
    flex: 1,
  },
});
