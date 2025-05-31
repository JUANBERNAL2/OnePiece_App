import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Bounty = () => {
  const navigation = useNavigation();

  const [totalBounty, setTotalBounty] = useState(0);

  //   Guardar el valor de la recompensa total en AsyncStorage
  const storeBounty = async (value) => {
    try {
      await AsyncStorage.setItem("totalBounty", value);
    } catch (error) {
      console.error("Error saving bounty:", error);
    }
  };

  // Leer el valor de la recompensa total de AsyncStorage
  const getBounty = async () => {
    try {
      const value = await AsyncStorage.getItem("totalBounty");
      if (value !== null) {
        setTotalBounty(parseInt(value, 10));
      }
    } catch (error) {
      console.error("Error retrieving bounty:", error);
    }
  };

  useEffect(() => {
    getBounty();
  }, []);

  // resetear la recompensa total
  const resetBounty = async () => {
    try {
      await AsyncStorage.removeItem("totalBounty");
      setTotalBounty(0);
    } catch (error) {
      console.error("Error resetting bounty:", error);
    }
  };

  //  Incrementar la recompensa total
  const increaseTotalBounty = () => {
    const newBounty = totalBounty + 1000;
    setTotalBounty(newBounty);
    storeBounty(newBounty?.toString());
  };

  return (
    <ScrollView>
      <Layout style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.bountyTitle}>WHAT IS YOUR BOUNTY RECORD?</Text>
          <Button
            title="Increase Bounty"
            onPress={increaseTotalBounty}
            color="#69A481"
          ></Button>
          <Image
            source={require("../assets/images/cartel2.jpg")}
            style={styles.image}
          />
          <Text style={styles.bountyText}>Total Bounty = {totalBounty}</Text>

          <Button
            title="Reset Bounty"
            onPress={resetBounty}
            color="#69A481"
          ></Button>
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
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height,
    backgroundColor: "#461312",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 300,
    height: 450,
  },
  bountyTitle: {
    fontSize: 27,
    fontFamily: "JacquesFrancoisShadow",
    color: "#FFFF",
    marginBottom: 20,
  },
  bountyText: {
    fontSize: 30,
    fontFamily: "JacquesFrancoisShadow",
    color: "#FFFF",
    marginBottom: 20,
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#E7EDEB",
    borderRadius: 15,
  },
  backButtonText: {
    color: "#461312",
    fontSize: 23,
    fontFamily: "JacquesFrancoisShadow",
  },
});
export default Bounty;
