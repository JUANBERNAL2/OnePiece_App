// JokeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";

const JokeScreen = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();
      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup}\n\n${data.delivery}`);
      }
    } catch (error) {
      setJoke("❌ Error al cargar el chiste.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}>!Random Jokes!</Text>
          <Button title="SAY A JOKE" onPress={fetchJoke} color="#00F52D" />
          {loading && <ActivityIndicator size=" large" color="#0000ff" />}
          {joke && <Text style={styles.jokeText}>{joke}</Text>}
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}> Back</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </ScrollView>
  );
};

export default JokeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff3cd",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 26,
    fontFamily: "JacquesFrancoisShadow",
    marginBottom: 10,
    color: "#333",
  },
  jokeText: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "JacquesFrancoisShadow",
    color: "#212529",
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#13258b",
    borderRadius: 15,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 23,
    fontFamily: "JacquesFrancoisShadow",
  },
});
