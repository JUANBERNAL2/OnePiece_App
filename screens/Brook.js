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

export default function Brook() {
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/voiceBrook.mp3")
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
          <Text style={styles.title}>BROOK</Text>
          <Image
            source={require("../assets/images/Brook.jpg")}
            style={styles.image}
          />
          <Text style={styles.description}>
            Not even death is an excuse for not keeping a promise, is the dream
            of Brook, who seeks to keep his promise to Laboon.
          </Text>
          <Video
            source={require("../assets/Videos/brook.mp4")}
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
    backgroundColor: "#fff",
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
    backgroundColor: "#ff443d",
    borderRadius: 15,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 23,
    fontFamily: "JacquesFrancoisShadow",
  },
  Audio: {
    fontSize: 25,
    fontFamily: "JacquesFrancoisShadow",
    marginBottom: 10,
  },
});
