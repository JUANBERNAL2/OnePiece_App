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

export default function Chopper() {
  const [sound, setSound] = useState();
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/audio/voiceChopper.mp3")
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
        <View style={[styles.container, { backgroundColor: colors.backgroundChopper }]}>
          <Text style={[styles.title, { color: colors.text }]}>TONY TONY CHOPPER</Text>
          <Image
            source={require("../assets/images/Chopper.jpg")}
            style={styles.image}
          />
          <Text style={[styles.description, { color: colors.text }]}>
            There's no disease that can't be cured, that's Chopper's dream. He's
            a doctor who strives to help others and save lives.
          </Text>
          <Video
            source={require("../assets/Videos/chopper.mp4")}
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

            {/* Button to press to listen to the character*/}
            <Button title="Play Audio" onPress={playSound} color="#B720FE" />
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
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "JacquesFrancoisShadow",
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#B720FE",
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
