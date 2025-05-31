// Importar  modulos basicos de react
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Definimos el componente Header
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Mi App</Text>
    </View>
  );
}

// Estilos para el componente Header

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
