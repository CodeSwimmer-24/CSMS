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

const AccidentForm = ({ modalVisible, setModalVisible, title }) => {
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
            <Text style={styles.modalTitle}>Accident / Incident Report</Text>

            {/* <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Accident/Incident Type</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={accidentType}
                  onValueChange={(itemValue) => setAccidentType(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item
                    label="Low Potential Near Mess (LPNM)"
                    value="Low Potential Near Mess (LPNM)"
                  />
                  <Picker.Item
                    label="High Potential Near Mess (HPNM)"
                    value="High Potential Near Mess (HPNM)"
                  />
                  <Picker.Item
                    label="First Aids (FA)"
                    value="First Aids (FA)"
                  />
                  <Picker.Item
                    label="Loss Time Injury (LTI)"
                    value="Loss Time Injury (LTI)"
                  />
                  <Picker.Item
                    label="Permenent Damage (PD)"
                    value="Permenent Damage (PD)"
                  />
                  <Picker.Item
                    label="Dangerious Occurrence (DO)"
                    value="Dangerious Occurrence (DO)"
                  />
                  <Picker.Item
                    label="Medical Treatment Case (MTC)"
                    value="Medical Treatment Case (MTC)"
                  />
                  <Picker.Item
                    label="Restricted Work Case (RWC)"
                    value="Restricted Work Case (RWC)"
                  />
                  <Picker.Item
                    label="High Leavel Property Damage (HLPD)"
                    value="High Leavel Property Damage (HLPD)"
                  />
                  <Picker.Item
                    label="Low Leavel Property Damage (LLPD)"
                    value="Low Leavel Property Damage (LLPD)"
                  />
                </Picker>
              </View>
            </View> */}
            <InputBox label="Accident Type" placeholder={title} />
            <InputBox label="Accident Date" placeholder="Violaton Date" />
            <InputBox label="Accident Date" placeholder="Accident Date" />
            <InputBox
              label="Accident Location"
              placeholder="Accident Location"
            />
            <InputBox
              label="Safety Supervisor"
              placeholder="Safety Supervisor"
            />
            <InputBox label="Victim Name" placeholder="Victim Name" />
            <InputBox
              label="Write an Accident Note"
              placeholder="Write an Accident Note"
            />

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
    marginBottom: 20,
    marginTop: 20,
  },
  pickerContainer: {
    marginBottom: 10,
    marginTop: 20,
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
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default AccidentForm;
