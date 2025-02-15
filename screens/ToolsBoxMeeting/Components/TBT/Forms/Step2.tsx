import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import InputBox from "../../../../../components/InputBox"; // Importing InputBox component
import { colors } from "../../../../../global/colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const StepTwo = ({ nextStep, prevStep, setFormData, formData }) => {
  const [form, setForm] = useState({
    supervisor: formData.supervisor || "",
    safetyRep: formData.safetyRep || "",
    department: formData.department || "",
    contractorRep: formData.contractorRep || "",
    contractorEmployees: formData.contractorEmployees || "",
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Step Two</Text>
      </View>

      {/* Scrollable Content */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <InputBox
            label="Company Supervisor/Line Manager Name"
            placeholder="Enter Supervisor Name"
            value={form.supervisor}
            onChangeText={(text) => handleChange("supervisor", text)}
          />

          <InputBox
            label="Safety Representative"
            placeholder="Enter Safety Representative"
            value={form.safetyRep}
            onChangeText={(text) => handleChange("safetyRep", text)}
          />

          <InputBox
            label="Department"
            placeholder="Enter Department Name"
            value={form.department}
            onChangeText={(text) => handleChange("department", text)}
          />

          <InputBox
            label="Contractor Representative"
            placeholder="Enter Contractor Representative Name"
            value={form.contractorRep}
            onChangeText={(text) => handleChange("contractorRep", text)}
          />

          <InputBox
            label="Contractor Employees"
            placeholder="Enter Contractor Employees Name"
            value={form.contractorEmployees}
            onChangeText={(text) => handleChange("contractorEmployees", text)}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Fixed Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={prevStep}>
          <View style={styles.buttonIcon}>
            <AntDesign name="arrowleft" size={20} color="white" />
            <Text style={styles.buttonText}> Prev</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextStep}>
          <View style={styles.buttonIcon}>
            <Text style={styles.buttonText}>Next </Text>
            <AntDesign name="arrowright" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputBox: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Extra padding to prevent content from being cut off
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
    alignItems: "center",
    elevation: 5,
    width: "45%",
  },
  buttonIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default StepTwo;
