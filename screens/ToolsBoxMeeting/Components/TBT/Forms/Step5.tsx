import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../../../../global/colors";
import InputBox from "../../../../../components/InputBox";
import { Octicons } from "@expo/vector-icons";

const StepFive = ({ nextStep, prevStep }) => {
  const [employees, setEmployees] = useState([
    "Employee Name 1",
    "Employee Name 2",
    "Employee Name 3",
  ]);

  // Add new employee field
  const addEmployee = () => {
    setEmployees([...employees, `Employee Name ${employees.length + 1}`]);
  };

  // Remove employee field
  const removeEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Step Five</Text>
      </View>

      {/* Employee Names Section */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {employees.map((employee, index) => (
          <View key={index} style={styles.employeeRow}>
            <View style={styles.inputContainer}>
              <InputBox
                placeholder="Enter Employee Name"
                label="Enter Employee Name"
              />
            </View>
            <TouchableOpacity onPress={() => removeEmployee(index)}>
              <Octicons name="trash" size={24} color={colors.danger} />
            </TouchableOpacity>
          </View>
        ))}

        {/* Add Employee Button */}
        <TouchableOpacity style={styles.addButton} onPress={addEmployee}>
          <Text style={styles.addButtonText}>+ Add Employee</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Navigation Buttons */}
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
  headerContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  scrollContent: {
    paddingBottom: 20,
    padding: 20,
  },
  employeeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  inputContainer: {
    width: "90%",
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    width: "50%",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
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

export default StepFive;
