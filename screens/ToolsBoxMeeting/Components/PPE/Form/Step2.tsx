import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import InputBox from "../../../../../components/InputBox";
import { colors } from "../../../../../global/colors";

const PPE_OPTIONS = [
  "Safety Shoes",
  "Safety Helmet with Chain Strap",
  "Safety Ear Plug",
  "Safety Hand Gloves",
  "Safety Goggles",
  "Safety Florescent Jacket",
  "Safety Resistant Jacket",
  "Safety Heat Jacket",
  "Safety Heat Dust Mask",
  "Safety Leg Guard",
  "Safety Face Shield",
];

const StepTwo = ({ prevStep }) => {
  const [ppeItems, setPpeItems] = useState([
    { employeeName: "", ppeName: PPE_OPTIONS[0], condition: "Good" },
  ]);

  const addPpeItem = () => {
    setPpeItems([
      ...ppeItems,
      { employeeName: "", ppeName: PPE_OPTIONS[0], condition: "Good" },
    ]);
  };

  const removePpeItem = (index) => {
    if (ppeItems.length > 1) {
      setPpeItems(ppeItems.filter((_, i) => i !== index));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Step Two</Text>
      </View>
      <ScrollView style={{ padding: 20 }}>
        {ppeItems.map((ppe, index) => (
          <View key={index} style={styles.ppeContainer}>
            <InputBox placeholder="Enter Employee Name" label="Employee Name" />

            <View style={styles.pickerContainer}>
              <MaterialIcons
                name="verified"
                size={20}
                color={colors.primary}
                style={styles.icon}
              />
              <Picker
                selectedValue={ppe.ppeName}
                onValueChange={(itemValue) => {
                  const newPpeItems = [...ppeItems];
                  newPpeItems[index].ppeName = itemValue;
                  setPpeItems(newPpeItems);
                }}
                style={styles.picker}
              >
                {PPE_OPTIONS.map((ppe, idx) => (
                  <Picker.Item key={idx} label={ppe} value={ppe} />
                ))}
              </Picker>
            </View>

            <View style={styles.pickerContainer}>
              <MaterialIcons
                name="verified"
                size={20}
                color={colors.primary}
                style={styles.icon}
              />
              <Picker
                selectedValue={ppe.condition}
                onValueChange={(itemValue) => {
                  const newPpeItems = [...ppeItems];
                  newPpeItems[index].condition = itemValue;
                  setPpeItems(newPpeItems);
                }}
                style={styles.picker}
              >
                <Picker.Item label="Good" value="Good" />
                <Picker.Item label="Damaged" value="Damaged" />
                <Picker.Item label="Bad Condition" value="Bad Condition" />
              </Picker>
            </View>

            {ppeItems.length > 1 && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removePpeItem(index)}
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
          <TouchableOpacity style={styles.submitButton}>
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
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  ppeContainer: {
    marginBottom: 15,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  icon: {
    marginLeft: 10,
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
    backgroundColor: `${colors.danger}`,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
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
