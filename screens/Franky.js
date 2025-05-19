import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import { Video } from "expo-av";
import { Audio } from "expo-av";
import { useState } from "react";

export default function Franky() {
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/voiceFranky.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const navigation = useNavigation();

  return (
    <ScrollView>
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}>CUTY FLAM</Text>
          <Image
            source={require("../assets/images/Franky.jpg")}
            style={styles.image}
          />
          <Text style={styles.description}>
            Building the ancient weapon Pluton is Franky's dream, as he seeks to
            fulfill his dream of becoming a great builder and creating the best
            ship in the world.
          </Text>
          <Video
            source={require("../assets/Videos/franky.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay
            useNativeControls
            style={{ width: 280, height: 280 }}
          />
          <View style={styles.container}>
            <Text style={styles.Audio}>Reproductor de Audio</Text>

            {/* Botón que al presionar para escuchar al personaje*/}
            <Button title="Reproducir Audio" onPress={playSound} color="#000" />
          </View>

          {/* Botón de Volver */}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#558299",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 34,
    fontFamily: "JacquesFrancoisShadow",
  },
  image: {
    width: 280,
    height: 280,
    resizeMode: "contain",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "JacquesFrancoisShadow",
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  backButtonText: {
    color: "#000",
    fontSize: 23,
    fontFamily: "JacquesFrancoisShadow",
  },
  Audio: {
    fontSize: 25,
    fontFamily: "JacquesFrancoisShadow",
    marginBottom: 10,
  },
});
