import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Layout from "./components/Layout";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import JokeScreen from "./screens/JokeScreen";
import Luffy from "./screens/Luffy.js";
import Zoro from "./screens/Zoro.js";
import Nami from "./screens/Nami.js";
import Usopp from "./screens/Ussop.js";
import Sanji from "./screens/Sanji.js";
import Chopper from "./screens/Chopper.js";
import Robin from "./screens/Robin.js";
import Franky from "./screens/Franky.js";
import Brook from "./screens/Brook.js";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const items = [
    {
      source: require("./assets/Icons/muwiguara.png"),
      title: "Luffy",
      color: "#F50000",
      screen: "Luffy",
    },
    {
      source: require("./assets/Icons/katana.png"),
      title: "Zoro",
      color: "#00F52D",
      screen: "Zoro",
    },
    {
      source: require("./assets/Icons/naranja.png"),
      title: "Nami",
      color: "#FF5900",
      screen: "Nami",
    },
    {
      source: require("./assets/Icons/punto-de-mira.png"),
      title: "Usopp",
      color: "#947555",
      screen: "Usopp",
    },
    {
      source: require("./assets/Icons/gorro-de-cocinero.png"),
      title: "Sanji",
      color: "#F5D700",
      screen: "Sanji",
    },
    {
      source: require("./assets/Icons/hospital.png"),
      title: "Chopper",
      color: "#ED1FD1",
      screen: "Chopper",
    },
    {
      source: require("./assets/Icons/libro-abierto.png"),
      title: "Robin",
      color: "#B720FE",
      screen: "Robin",
    },
    {
      source: require("./assets/Icons/llave-inglesa.png"),
      title: "Franky",
      color: "#558299",
      screen: "Franky",
    },
    {
      source: require("./assets/Icons/juego-de-calaveras.png"),
      title: "Brook",
      color: "#FFFFFF",
      screen: "Brook",
    },
    {
      source: require("./assets/Icons/sombrero-de-joker.png"),
      title: "Brook",
      color: "#65fef4",
      screen: "JokeScreen",
    },
    // Puedes agregar más personajes aquí
  ];

  return (
    <ScrollView>
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}>ONE PIECE</Text>
          <View style={styles.gridContainer}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.itemContainer, { backgroundColor: item.color }]}
                onPress={() => navigation.navigate(item.screen)}
              >
                <Image source={item.source} style={styles.itemImage} />
              </TouchableOpacity>
            ))}
          </View>
          <StatusBar style="auto" />
        </View>
      </Layout>
    </ScrollView>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    JacquesFrancoisShadow: require("./assets/fonts/JacquesFrancoisShadow-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Luffy" component={Luffy} />
        <Stack.Screen name="Zoro" component={Zoro} />
        <Stack.Screen name="Nami" component={Nami} />
        <Stack.Screen name="Usopp" component={Usopp} />
        <Stack.Screen name="Sanji" component={Sanji} />
        <Stack.Screen name="Chopper" component={Chopper} />
        <Stack.Screen name="Robin" component={Robin} />
        <Stack.Screen name="Franky" component={Franky} />
        <Stack.Screen name="Brook" component={Brook} />
        <Stack.Screen name="JokeScreen" component={JokeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height,
    backgroundColor: "#F2E8CF",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 20,
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    fontFamily: "JacquesFrancoisShadow",
  },
  itemContainer: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
  },
  itemImage: {
    width: "70%",
    height: "70%",
  },
});
