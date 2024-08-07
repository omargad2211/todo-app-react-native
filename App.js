// App.js
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const todos = [
    { id: "1", title: "iti lecture", status: "done" },
    { id: "2", title: "react native lab", status: "active" },
    { id: "3", title: "gym", status: "active" },
  ];

  const listItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text style={styles.todoStatus}>Status: {item.status}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Todo Title" style={styles.input} />
        <TextInput placeholder="Description" style={styles.input} />
        <Button title="Add Todo" onPress={() => {}} style={styles.button} />
      </View>

      <View style={styles.divider} />

      <View style={styles.buttonContainer}>
        <Button title="All" onPress={() => {}} style={styles.button} />
        <Button title="Active" onPress={() => {}} style={styles.button} />
        <Button title="Done" onPress={() => {}} style={styles.button} />
      </View>

      <FlatList
        data={todos}
        renderItem={listItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "flex-start",
    margin: 5,
  },
  button: {
    backgroundColor: "#2196F3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  todoItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  todoStatus: {
    fontSize: 14,
    color: "#888888",
  },
});
