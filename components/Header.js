// Import basic react modules
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// We define the Header component
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My App</Text>
    </View>
  );
}

// Styles for the Header component

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#262025",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    fontFamily: "JacquesFrancoisShadow",
  },
});
