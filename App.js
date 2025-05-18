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
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    JacquesFrancoisShadow: require("./assets/fonts/JacquesFrancoisShadow-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const items = [
    {
      source: require("./assets/Icons/muwiguara.png"),
      title: "Muwiguara",
      color: "#F50000",
    },
    {
      source: require("./assets/Icons/katana.png"),
      title: "Zoro",
      color: "#00F52D",
    },
    {
      source: require("./assets/Icons/naranja.png"),
      title: "Nami",
      color: "#FF5900",
    },
    {
      source: require("./assets/Icons/punto-de-mira.png"),
      title: "Usopp",
      color: "#947555",
    },
    {
      source: require("./assets/Icons/gorro-de-cocinero.png"),
      title: "Sanji",
      color: "#F5D700",
    },
    {
      source: require("./assets/Icons/hospital.png"),
      title: "Chopper",
      color: "#ED1FD1",
    },
    {
      source: require("./assets/Icons/libro-abierto.png"),
      title: "Robin",
      color: "#B720FE",
    },
    {
      source: require("./assets/Icons/llave-inglesa.png"),
      title: "Franky",
      color: "#558299",
    },
    {
      source: require("./assets/Icons/juego-de-calaveras.png"),
      title: "Brook",
      color: "#FFFFFF",
    },
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
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
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
