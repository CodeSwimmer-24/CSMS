import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import InputBox from "../../../../../components/InputBox";
import { colors } from "../../../../../global/colors";

const StepOne = ({ nextStep, setFormData, formData }) => (
  <>
    <View style={styles.inputBox}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        Step One
      </Text>
    </View>
    <View style={styles.container}>
      <InputBox placeholder="13-02-2025" label="Today's Date" />

      <InputBox placeholder="12:09:12" label="Current Time" />

      <InputBox placeholder="Morning Shift" label="Current Shift" />

      <InputBox placeholder="EC22 RMBB" label="Current Site Location" />

      <InputBox
        placeholder="Work Order / Permit Number"
        label="Work Order / Permit Number"
      />

      <TouchableOpacity style={styles.button} onPress={nextStep}>
        <Text style={styles.buttonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputBox: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default StepOne;
