import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

// Layout que envuelve las pantallas
export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
}
const { height } = Dimensions.get("window");
// Estilos para el layout
const styles = StyleSheet.create({
  container: {
    minHeight: height,
    width: "100%",
  },
  content: {
    flex: 1,
  },
});
