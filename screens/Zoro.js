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
import { useTheme } from "../ThemeContext";

export default function Zoro() {
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/voiceZoro.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Unload the sound from memory when the component unmounts
        }
      : undefined;
  }, [sound]);

  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <ScrollView>
      <Layout>
        <View
          style={[styles.container, { backgroundColor: colors.backgroundZoro }]}
        >
          <Text style={[styles.title, { color: colors.text }]}>
            RONOROA ZORO
          </Text>
          <Image
            source={require("../assets/images/Zoro.jpg")}
            style={styles.image}
          />
          <Text style={[styles.description, { color: colors.text }]}>
            The dream of being the best swordsman in the world is also a promise
            to his best friend Kuina.
          </Text>
          <Video
            source={require("../assets/Videos/zoro.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay
            useNativeControls
            style={{ width: 400, height: 300 }}
          />
          <View style={styles.container}>
            <Text style={[styles.Audio, { color: colors.text }]}>
              Audio Player
            </Text>

            {/* Button that when pressed to listen to the character*/}
            <Button title="Play Audio" onPress={playSound} color="#FF5900" />
          </View>

          {/* Back Button */}
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
    width: 340,
    height: 300,
    resizeMode: "contain",
  },
  description: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "JacquesFrancoisShadow",
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#FF5900",
    borderRadius: 15,
  },
  backButtonText: {
    color: "#FFFF",
    fontSize: 23,
    fontFamily: "JacquesFrancoisShadow",
  },
  Audio: {
    fontSize: 25,
    fontFamily: "JacquesFrancoisShadow",
    marginBottom: 10,
  },
});
