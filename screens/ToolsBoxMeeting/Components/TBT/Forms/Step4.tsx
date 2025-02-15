import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import InputBox from "../../../../../components/InputBox"; // Importing InputBox component
import { colors } from "../../../../../global/colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const StepFour = ({ nextStep, prevStep }) => {
  const [form, setForm] = useState({
    sopRelative: "",
    employeeReminder: "",
    safetyMessage: "",
    actionPoints: "",
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Step Four</Text>
      </View>

      {/* Scrollable Form */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Section 4 */}
          <Text style={styles.title}>4.) SOP - Relative to the group</Text>
          <InputBox
            label=""
            placeholder="Type Your Message..."
            value={form.sopRelative}
            onChangeText={(text) => handleChange("sopRelative", text)}
          />

          {/* Section 5 */}
          <Text style={styles.title}>
            5.) Reminder to Employees of their Personal Responsibilities to
            insure and maintain.
          </Text>
          <InputBox
            label=""
            placeholder="Type Your Message..."
            value={form.employeeReminder}
            onChangeText={(text) => handleChange("employeeReminder", text)}
          />

          {/* Section 6 */}
          <Text style={styles.title}>
            6.) Safety Message Hand-out/circular to be shared within contract
            Employees.
          </Text>
          <InputBox
            label=""
            placeholder="Type Your Message..."
            value={form.safetyMessage}
            onChangeText={(text) => handleChange("safetyMessage", text)}
          />

          {/* Section 7 */}
          <Text style={styles.title}>
            7.) Action resulting from meeting and points raised by the contract
            employees and supervisor.
          </Text>
          <InputBox
            label=""
            placeholder="Type Your Message..."
            value={form.actionPoints}
            onChangeText={(text) => handleChange("actionPoints", text)}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Fixed Bottom Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={prevStep}>
          <AntDesign name="arrowleft" size={20} color="white" />
          <Text style={styles.buttonText}> Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={nextStep}>
          <Text style={styles.buttonText}>Next </Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  inputBox: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Ensures space for keyboard
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 0,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },
});

export default StepFour;
