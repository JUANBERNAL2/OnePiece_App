import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Platform,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet } from "react-native";
import Layout from "../components/Layout";

export default function DateTimePickerScreen() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date"); // "time" para hora

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === "ios"); // en iOS se queda visible
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showPicker = (type) => {
    setMode(type);
    setShow(true);
  };

  const navigation = useNavigation();
  return (
    <ScrollView>
      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}>WHEN YOU'LL START WATCHING ONE PIECE</Text>
          <Text style={styles.dateTimeText}>
            Selected date and time: {date.toLocaleString()}
          </Text>

          <Button title="Select Date" onPress={() => showPicker("date")} />
          <Button title="Select time" onPress={() => showPicker("time")} />

          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
            />
          )}
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
const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height,
    backgroundColor: "#F2E8CF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 50,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "JacquesFrancoisShadow",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#576238",
    borderRadius: 15,
  },
  backButtonText: {
    color: "#000",
    fontSize: 23,
    fontFamily: "JacquesFrancoisShadow",
  },
  dateTimeText: {
    textAlign: "center",
    fontSize: 19,
    fontFamily: "JacquesFrancoisShadow",
    marginBottom: 20,
  },
});
