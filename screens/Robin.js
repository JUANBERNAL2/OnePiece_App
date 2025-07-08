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
import { useTheme } from "../ThemeContext"; // Import the useTheme hook

export default function Robin() {
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/voiceRobin.mp3")
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

  const { colors } = useTheme(); // Use the colors from the theme
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Layout>
        <View style={[styles.container, { backgroundColor: colors.backgroundRobin }]}>
          <Text style={[styles.title, { color: colors.text }]}>NICO ROBIN</Text>
          <Image
            source={require("../assets/images/Nico.jpg")}
            style={styles.image}
          />
          <Text style={[styles.description, { color: colors.text }]}>
            Discovering the history of humanity is Robin's dream, as he searches
            for the true meaning of history and the truth behind the empty
            century.
          </Text>
          <Video
            source={require("../assets/Videos/robin.mp4")}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay
            useNativeControls
            style={{ width: 280, height: 280 }}
          />
          <View style={styles.container}>
            <Text style={[styles.Audio, { color: colors.text }]}>Audio Player</Text>

            {/* Button that when pressed to listen to the character*/}
            <Button title="Play Audio" onPress={playSound} color="#558299" />
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
    width: 280,
    height: 280,
    resizeMode: "contain",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "JacquesFrancoisShadow",
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#558299",
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
