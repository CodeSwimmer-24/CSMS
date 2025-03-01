import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../../global/colors";
import InputBox from "../../../components/InputBox";
import Feather from "@expo/vector-icons/Feather";
import { Picker } from "@react-native-picker/picker";

const Feedback = ({ setModalVisible, modalVisible, selectedForm }) => {
  const [accidentType, setAccidentType] = useState("");
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection="down"
      style={styles.bottomModal}
      backdropColor="black"
      backdropOpacity={0.7}
    >
      <View style={styles.modalContent}>
        <ScrollView>
          {/* Modal Header */}
          <View style={styles.header}>
            <Text style={styles.modalTitle}>{selectedForm?.title}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.close}>CLOSE</Text>
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>FSGR Title</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={accidentType}
                  onValueChange={(itemValue) => setAccidentType(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item
                    label="Retention(अवधारण)"
                    value="Retention(अवधारण)"
                  />
                  <Picker.Item
                    label="Amenities (सुविधाएं)"
                    value="Amenities (सुविधाएं)"
                  />
                  <Picker.Item
                    label="Unsafe Act (असुरक्षित कृत्य)"
                    value="Unsafe Act (असुरक्षित कृत्य)"
                  />
                  <Picker.Item
                    label="Unsafe Condition (असुरक्षित हालत)"
                    value="Unsafe Condition (असुरक्षित हालत)"
                  />
                  <Picker.Item label="Enquiry Act" value="Enquiry Act" />
                </Picker>
              </View>
            </View>

            <InputBox
              label="Feedback Shared By"
              placeholder="Enter Name who Shared Feedback"
            />
            <InputBox
              label="Feedback Shared Through"
              placeholder="Mention Name or (Self)"
            />
            <InputBox label="Incharge Name" placeholder="Enter Incharge Name" />
            <InputBox
              label="Explain your Problem"
              placeholder="Explain your Problem in detail."
            />
          </View>

          {/* Upload Photo Button */}
          <TouchableOpacity style={styles.uploadButton}>
            <Feather name="camera" size={20} color="white" />
            <Text style={styles.uploadButtonText}>Upload Photo</Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    padding: 22,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  close: {
    fontWeight: "700",
    fontSize: 16,
    color: colors.danger,
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
  modalTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 15,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  uploadButtonText: {
    marginLeft: 10,
    fontWeight: "600",
    color: "white",
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 5,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Feedback;
