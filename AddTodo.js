import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

function AddTodo({ submitHandler }) {
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    setInput(e);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="type your ideas..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(input)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    padding: 30,
  },
});
