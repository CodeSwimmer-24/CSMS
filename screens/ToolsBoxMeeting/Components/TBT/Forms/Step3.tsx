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

const StepThree = ({ nextStep, prevStep, formData, setFormData }) => {
  const [form, setForm] = useState({
    actionItems: "",
    generalSafety: "",
    safetyInterest: "",
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Step Three</Text>
      </View>

      {/* Scrollable Form */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Section 1 */}
          <Text style={styles.title}>
            1.) Safety Contract review of action items from last meetings.
          </Text>
          <InputBox
            label=""
            placeholder="Type your answer..."
            value={form.actionItems}
            onChangeText={(text) => handleChange("actionItems", text)}
          />

          {/* Section 2 */}
          <Text style={styles.title}>
            2.) Items of General Safety Importance to the total work site.
          </Text>
          <Text style={styles.description}>
            Ask employee to mention any Incident/near miss duration that past
            day which may have or have resulted into damage to property or
            injury to company or Contract personnel.
          </Text>
          <InputBox
            label=""
            placeholder="Type your answer..."
            value={form.generalSafety}
            onChangeText={(text) => handleChange("generalSafety", text)}
          />

          {/* Section 3 */}
          <Text style={styles.title}>
            3.) Items of Safety Interest to this Group.
          </Text>
          <Text style={styles.description}>
            Red Strips, Orange Strips, #209920 Strips, Safety-alert tips for
            Safety communications, hazards or Safety conditions applicable to
            this group's work area.
          </Text>
          <InputBox
            label=""
            placeholder="Please provide any queries you may have on the above..."
            value={form.safetyInterest}
            onChangeText={(text) => handleChange("safetyInterest", text)}
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
    // padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Ensures space for keyboard
  },
  inputBox: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 5,
    marginTop: 15,
  },
  description: {
    fontSize: 14,
    color: "#007BFF",
    marginBottom: 5,
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

export default StepThree;
