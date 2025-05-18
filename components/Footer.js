// Importar  modulos basicos de react
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Definimos el componente Header
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>@2025 Mi App</Text>
    </View>
  );
}

// Estilos para el componente Footer

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#30292F",
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
