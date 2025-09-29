import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import InputBox from "../../../../../components/InputBox";
import { colors } from "../../../../../global/colors";

const StepTwo = () => {
  const [tools, setTools] = useState([
    { name: "Tools Name", condition: "Condition" },
  ]);

  const addTool = () => {
    setTools([...tools, { name: "", condition: "Condition" }]);
  };

  const removeTool = (index) => {
    if (tools.length > 1) {
      setTools(tools.filter((_, i) => i !== index));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Step Two</Text>
      </View>
      <ScrollView style={{ padding: 20 }}>
        {tools.map((tool, index) => (
          <View key={index} style={styles.toolContainer}>
            <Text style={styles.label}>Tools Name</Text>
            <InputBox placeholder="Enter Tool Name" label="Tool's Name" />

            <View style={styles.pickerContainer}>
              <MaterialIcons
                name="verified"
                size={20}
                color={colors.primary}
                style={styles.icon}
              />
              <Picker
                selectedValue={tool.condition}
                onValueChange={(itemValue) => {
                  const newTools = [...tools];
                  newTools[index].condition = itemValue;
                  setTools(newTools);
                }}
                style={styles.picker}
              >
                <Picker.Item label="Good" value="Good" />
                <Picker.Item label="Damaged" value="Damaged" />
                <Picker.Item label="Bad Condition" value="Bad Conditions" />
              </Picker>
            </View>

            {tools.length > 1 && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeTool(index)}
              >
                <Octicons name="trash" size={20} color="white" />
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={addTool}>
          <Text style={styles.buttonText}>+ Add Tools</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.prevButton}>
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
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  toolContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003399",
    marginBottom: 5,
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
    backgroundColor: `${colors.danger}9a`,
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
