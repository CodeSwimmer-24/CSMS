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

const ViolationForm = ({ modalVisible, setModalVisible }) => {
  const [accidentType, setAccidentType] = useState("Accident");

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

            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Form Type</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={accidentType}
                  onValueChange={(itemValue) => setAccidentType(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Violation" value="Violation" />
                  <Picker.Item
                    label="Good Observation"
                    value="Good Observation"
                  />
                </Picker>
              </View>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>During</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={accidentType}
                  onValueChange={(itemValue) => setAccidentType(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item
                    label="Daily Observation"
                    value="Daily Observation"
                  />
                  <Picker.Item label="Line Walk" value="Line Walk" />
                </Picker>
              </View>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Severity</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={accidentType}
                  onValueChange={(itemValue) => setAccidentType(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                </Picker>
              </View>
            </View>

            <InputBox label="Violation Date" placeholder="Violaton Date" />
            <InputBox
              label="Violation Location"
              placeholder="Violation Location"
            />
            <InputBox
              label="Reported By"
              placeholder="Reported By (Person Name)"
            />
            <InputBox label="Victim Name" placeholder="Victim Name" />
            <InputBox label="Comment" placeholder="Write an Comment" />

            <View>
              <TouchableOpacity style={styles.uploadButton}>
                <Ionicons name="folder-open-outline" size={24} color="white" />
                <Text style={styles.uploadText}>Upload Violation Image</Text>
              </TouchableOpacity>
            </View>

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
    marginBottom: 0,
    marginTop: 0,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 5,
    marginTop: 20,
  },
  pickerWrapper: {
    borderWidth: 1, // Add border width
    borderColor: "#ccc",
    borderRadius: 10, // Apply border radius
    overflow: "hidden", // Ensure the border radius is applied
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
