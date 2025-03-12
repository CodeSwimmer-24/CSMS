import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { colors } from "../../../global/colors";
import InputBox from "../../../components/InputBox";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";

const pickerOptions = [
  {
    label: "Form Type",
    state: "formType",
    options: [
      { label: "Violation", value: "Violation" },
      { label: "Good Observation", value: "Good Observation" },
    ],
  },
  {
    label: "During",
    state: "during",
    options: [
      { label: "Daily Observation", value: "Daily Observation" },
      { label: "Line Walk", value: "Line Walk" },
      { label: "PPE Audit", value: "PPE Audit" },
      { label: "SSS Audit", value: "SSS Audit" },
      { label: "5S House Keeping Audit", value: "5S House Keeping Audit" },
      { label: "Store Audit", value: "Store Audit" },
    ],
  },
  {
    label: "Severity",
    state: "severity",
    options: [
      { label: "0", value: "0" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ],
  },
];

const ViolationForm = ({ modalVisible, setModalVisible }) => {
  const [formValues, setFormValues] = useState({
    formType: "Violation",
    during: "Daily Observation",
    severity: "0",
  });

  const handlePickerChange = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Violation / Good Observation</Text>

            {pickerOptions.map(({ label, state, options }) => (
              <View key={state} style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>{label}</Text>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={formValues[state]}
                    onValueChange={(value) => handlePickerChange(state, value)}
                    style={styles.picker}
                  >
                    {options.map((option) => (
                      <Picker.Item
                        key={option.value}
                        label={option.label}
                        value={option.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
            ))}

            <InputBox label="Violation Date" placeholder="Violation Date" />
            <InputBox
              label="Violation Location"
              placeholder="Violation Location"
            />
            <InputBox
              label="Reported By"
              placeholder="Reported By (Person Name)"
            />
            <InputBox label="Victim Name" placeholder="Victim Name" />
            <InputBox
              label="Violation Details"
              placeholder="Write Violation in detail"
            />

            <TouchableOpacity style={styles.uploadButton}>
              <Ionicons name="folder-open-outline" size={24} color="white" />
              <Text style={styles.uploadText}>Upload Violation Image</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    height: "95%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 28,
    paddingTop: 10,
  },
  modalContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 10,
    marginTop: 20,
  },
  pickerContainer: {
    marginBottom: 10,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 5,
    marginTop: 20,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    color: "#505050",
    marginLeft: 5,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeButton: {
    backgroundColor: `${colors.danger}1a`,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "48%",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.danger,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "48%",
    elevation: 5,
  },
  uploadButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  uploadText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 10,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default ViolationForm;
