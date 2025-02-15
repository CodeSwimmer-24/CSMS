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
import { colors } from "../../../../../global/colors";
import InputBox from "../../../../../components/InputBox";
import Octicons from "@expo/vector-icons/Octicons";

const StepThree = () => {
  const [selectedHazard, setSelectedHazard] = useState("");
  const [hazards, setHazards] = useState([]);
  const [steps, setSteps] = useState(["Necessary Step 1"]);

  const addHazard = () => {
    if (selectedHazard && !hazards.includes(selectedHazard)) {
      setHazards([...hazards, selectedHazard]);
      setSelectedHazard("");
    }
  };

  const removeHazard = (index) => {
    setHazards(hazards.filter((_, i) => i !== index));
  };

  const addStep = () => {
    setSteps([...steps, `Necessary Step ${steps.length + 1}`]);
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Step Three</Text>
      </View>
      <ScrollView style={{ padding: 20 }}>
        <Text style={styles.heading}>Enter Hazards Description</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedHazard}
            onValueChange={(itemValue) => setSelectedHazard(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Left" value="Left" />
            <Picker.Item label="Right" value="Right" />
            <Picker.Item label="Top" value="Top" />
            <Picker.Item label="Bottom" value="Bottom" />
            <Picker.Item label="Front" value="Front" />
            <Picker.Item label="Back" value="Back" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.buttonBlue} onPress={addHazard}>
          <Text style={styles.buttonText}>+ Add Hazard</Text>
        </TouchableOpacity>

        {hazards.map((hazard, index) => (
          <View key={index} style={styles.hazardContainer}>
            <Text style={styles.hazardText}>{hazard}</Text>
            <TouchableOpacity
              onPress={() => removeHazard(index)}
              style={styles.removeButton}
            >
              <Octicons name="trash" size={24} color={colors.danger} />
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.headingNecessarySteps}>
          Enter Necessary Steps Taken
        </Text>
        {steps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            {/* <TextInput style={styles.input} value={step} editable={false} /> */}
            <View
              style={{
                width: "90%",
              }}
            >
              <InputBox
                placeholder="Necessary Steps"
                label="Enter Necessary Steps as for Hazzard"
              />
            </View>
            <TouchableOpacity
              onPress={() => removeStep(index)}
              style={styles.removeButton}
            >
              <Octicons name="trash" size={24} color={colors.danger} />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.buttonBlue} onPress={addStep}>
          <Text style={styles.buttonText}>+ Add Step</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPurple}>
            <Text style={styles.buttonText}>Prev</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonGreen}>
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
  heading: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 10,
  },
  headingNecessarySteps: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginTop: 10,
    marginBottom: 10,
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "gray",
  },
  picker: {
    height: 50,
  },
  buttonBlue: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#F0F0F",
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 50,
  },
  buttonPurple: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    elevation: 5,
  },
  buttonGreen: {
    backgroundColor: colors.success,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    elevation: 5,
  },
  hazardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: `${colors.danger}1a`,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
  hazardText: {
    flex: 1,
    fontSize: 16,
    color: colors.danger,
    fontWeight: "400",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeButton: {
    backgroundColor: `${colors.danger}1a`,
    padding: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "600",
  },
});

export default StepThree;
