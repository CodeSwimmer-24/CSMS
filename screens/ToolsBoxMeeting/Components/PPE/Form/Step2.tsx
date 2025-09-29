import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import InputBox from "../../../../../components/InputBox";
import { colors } from "../../../../../global/colors";

interface PPEItem {
  id: string;
  name: string;
  checked: boolean;
}

const StepTwo = ({ prevStep }) => {
  const [ppeData, setPpeData] = useState([
    {
      employeeName: "",
      ppeList: [
        { id: '1', name: 'Safety Shoes', checked: true },
        { id: '2', name: 'Safety Helmet with chain Strap', checked: true },
        { id: '3', name: 'Safety Ear Plug', checked: true },
        { id: '4', name: 'Safety Hand Gloves', checked: true },
        { id: '5', name: 'Safety Goggles', checked: true },
        { id: '6', name: 'Safety Florescent Jacket', checked: true },
        { id: '7', name: 'Safety Resistant Jacket', checked: true },
        { id: '8', name: 'Safety Heat Jacket', checked: true },
        { id: '9', name: 'Safety Dust Mask', checked: false },
        { id: '10', name: 'Safety Leg Guard', checked: false },
        { id: '11', name: 'Safety Face Shield', checked: false },
      ] as PPEItem[]
    },
  ]);

  const addPpeItem = () => {
    setPpeData([
      ...ppeData,
      {
        employeeName: "",
        ppeList: [
          { id: '1', name: 'Safety Shoes', checked: true },
          { id: '2', name: 'Safety Helmet with chain Strap', checked: true },
          { id: '3', name: 'Safety Ear Plug', checked: true },
          { id: '4', name: 'Safety Hand Gloves', checked: false },
          { id: '5', name: 'Safety Goggles', checked: false },
          { id: '6', name: 'Safety Florescent Jacket', checked: true },
          { id: '7', name: 'Safety Resistant Jacket', checked: true },
          { id: '8', name: 'Safety Heat Jacket', checked: true },
          { id: '9', name: 'Safety Dust Mask', checked: false },
          { id: '10', name: 'Safety Leg Guard', checked: false },
          { id: '11', name: 'Safety Face Shield', checked: false },
        ] as PPEItem[]
      },
    ]);
  };

  const removePpeItem = (index: number) => {
    if (ppeData.length > 1) {
      setPpeData(ppeData.filter((_, i) => i !== index));
    }
  };

  const updateEmployeeName = (index: number, name: string) => {
    const newPpeData = [...ppeData];
    newPpeData[index].employeeName = name;
    setPpeData(newPpeData);
  };

  const handleSubmit = () => {
    console.log("PPE Data submitted:", ppeData);
    // Add your submit logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Step Two</Text>
      </View>
      <ScrollView style={{ padding: 20 }}>
        {ppeData.map((employee, employeeIndex) => (
          <View key={employeeIndex} style={styles.ppeContainer}>
            
            <InputBox
              placeholder="Enter Employee Name"
              label="Employee Name"
              value={employee.employeeName}
              onChangeText={(text: string) => updateEmployeeName(employeeIndex, text)}
            />

            <View style={styles.checklistCard}>
              {employee.ppeList.map((ppe) => (
                <View key={ppe.id} style={styles.checklistRow}>
                  <Text style={styles.ppeItemText}>{ppe.name}</Text>
                  <View style={styles.buttonGroup}>
                    <View
                      style={[
                        styles.checkButton,
                        ppe.checked && styles.checkButtonActive,
                      ]}
                    >
                      <MaterialIcons name="check" size={14} color="#fff" />
                    </View>
                    <View
                      style={[
                        styles.crossButton,
                        !ppe.checked && styles.crossButtonActive,
                      ]}
                    >
                      <MaterialIcons name="close" size={14} color="#fff" />
                    </View>
                  </View>
                </View>
              ))}
            </View>

            {ppeData.length > 1 && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removePpeItem(employeeIndex)}
              >
                <Octicons name="trash" size={20} color="white" />
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={addPpeItem}>
          <Text style={styles.buttonText}>+ Add PPE</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => prevStep()}
            style={styles.prevButton}
          >
            <Text style={styles.buttonText}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>SUBMIT ✓</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputBox: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  ppeContainer: {
    marginBottom: 25,
  },
  checklistCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 10,
  },
  checklistRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  ppeItemText: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 8,
  },
  checkButton: {
    width: 18,
    height: 18,
    borderRadius: 16,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  checkButtonActive: {
    backgroundColor: "#22c55e",
  },
  crossButton: {
    width: 18,
    height: 18,
    borderRadius: 16,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  crossButtonActive: {
    backgroundColor: "#ef4444",
  },
  addButton: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  removeButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.danger,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  prevButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: colors.success,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
  },
});

export default StepTwo;