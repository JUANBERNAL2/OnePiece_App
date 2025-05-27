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

const Bounty = () => {
  const navigation = useNavigation();

  const [totalBounty, setTotalBounty] = useState(0);

  return (
    <ScrollView>
      <Layout style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.bountyTitle}>WHAT IS YOUR BOUNTY RECORD?</Text>
          <Image
            source={require("../assets/images/cartel2.jpg")}
            style={styles.image}
          />
          <Text style={styles.bountyText}>Total Bounty = {totalBounty}</Text>
          <Button
            title="Increase Bounty"
            onPress={() => setTotalBounty(totalBounty + 1000)}
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
    fontSize: 24,
    fontFamily: "JacquesFrancoisShadow",
    color: "#FFFF",
    marginBottom: 20,
  },
  bountyText: {
    fontSize: 20,
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
