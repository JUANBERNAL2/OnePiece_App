import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";

export default function Fruits() {
  const [fruits, setFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchFruits = async () => {
    try {
      const response = await fetch("https://api.api-onepiece.com/v2/fruits/en");
      const data = await response.json();
      setFruits(data);
      setFilteredFruits(data);
    } catch (error) {
      console.error("Error fetching fruits:", error);
    } finally {
      setLoading(false);
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    fetchFruits();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredFruits(filtered);
  };

  const renderItem = ({ item }) => (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.name}>{item.roman_name}</Text>
        <Text style={styles.type}>Tipo: {item.type}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {item.filename && (
          <Image
            source={{ uri: item.filename }}
            style={styles.image}
            resizeMode="contain"
          />
        )}
      </View>
    </ScrollView>
  );

  if (loading) return <ActivityIndicator style={styles.loader} size="large" />;

  return (
    <ScrollView>
      <Layout>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}> Back</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="search for fruit by name..."
            style={styles.input}
            value={search}
            onChangeText={handleSearch}
          />

          <FlatList
            data={filteredFruits}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </Layout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#30292F",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#eef6ff",
    margin: 10,
    marginBottom: 40,
    borderRadius: 10,
    padding: 11,
    elevation: 3,
    gap: 10,
  },
  name: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    paddingBottom: 20,
    marginBottom: 4,
    fontFamily: "JacquesFrancoisShadow",
  },
  type: {
    paddingLeft: 40,
    fontFamily: "JacquesFrancoisShadow",
    marginBottom: 4,
    fontSize: 16,
  },
  description: {
    padding: 30,
    marginBottom: 10,
    fontSize: 19,
    fontFamily: "JacquesFrancoisShadow",
    color: "#333",
  },
  image: {
    height: 170,
    marginTop: 15,
    paddingBottom: 30,
  },
  backButton: {
    marginTop: 30,
    marginBottom: 20,
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
