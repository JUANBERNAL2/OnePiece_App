// Import basic react modules
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// We define the Footer component
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>@2025 My App</Text>
    </View>
  );
}

// Styles for the Footer component

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#262025",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "JacquesFrancoisShadow",
  },
});
