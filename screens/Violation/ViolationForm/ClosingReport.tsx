import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../../global/colors";
import InputBox from "../../../components/InputBox";
import Ionicons from "@expo/vector-icons/Ionicons";

const ClosingReport = ({ isVisible, onClose, title, selectedDate }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose} // Close when tapping outside
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      useNativeDriver
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.close}>
            <Text style={styles.heading}>Close Report</Text>
            <TouchableOpacity onPress={() => onClose()}>
              <Text style={styles.closeText}>CLOSE</Text>
            </TouchableOpacity>
          </View>

          {/* Referral ID */}
          <View style={styles.section}>
            <Text style={styles.label}>Referral ID</Text>
            <Text style={styles.value}>{title}</Text>
          </View>

          {/* Logged Date */}
          <View style={styles.section}>
            <Text style={styles.label}>Logged Date</Text>
            <Text style={styles.value}>{selectedDate}</Text>
          </View>

          {/* Closing Report Input */}
          <View style={styles.section}>
            <InputBox
              label="Closing Report"
              placeholder="Enter the detailed Closing Report"
            />
          </View>

          {/* Upload Button */}
          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="folder-open-outline" size={24} color="white" />
            <Text style={styles.uploadText}>Upload After Image</Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Ionicons name="checkmark-circle" size={24} color="white" />
            <Text style={styles.uploadText}>Submit Report</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end", // Positions at the bottom
    margin: 0, // Removes default margins
  },
  modalContainer: {
    height: "70%", // Takes up 70% of screen height
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: "bold",
  },
  section: {
    marginTop: 20,
  },
  closeText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.danger,
  },
  label: {
    fontSize: 14,
    color: "gray",
  },
  value: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.secondary,
  },
  close: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  uploadButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    marginTop: 20,
    alignItems: "center",
  },
  submitButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.success,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center",
  },
  uploadText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default ClosingReport;
