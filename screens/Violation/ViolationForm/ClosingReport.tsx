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

// Reusable Row Component
const InfoRow = ({ label1, value1, label2, value2 }) => (
  <View style={styles.infoRow}>
    <View style={styles.section}>
      <Text style={styles.label}>{label1}</Text>
      <Text style={styles.value}>{value1}</Text>
    </View>
    =
    <View style={styles.section}>
      <Text style={styles.label}>{label2}</Text>
      <Text style={styles.value}>{value2}</Text>
    </View>
  </View>
);

const ClosingReport = ({ isVisible, onClose, title, selectedDate }) => {
  const preventiveActions = [
    "Preventive Action One",
    "Preventive Action Two",
    "Preventive Action Three",
    "Preventive Action Four",
    "Preventive Action Five",
  ];

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      useNativeDriver
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.heading}>Closing Report</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>CLOSE</Text>
            </TouchableOpacity>
          </View>

          {/* Details */}
          <View style={styles.section}>
            <Text style={styles.label}>Referral ID</Text>
            <Text style={styles.value}>{title}</Text>
          </View>

          <InfoRow
            label1="Logged Date"
            value1={selectedDate}
            label2="Location"
            value2="RMM E22"
          />
          <InfoRow
            label1="During"
            value1="Line Walk"
            label2="Severity"
            value2="5"
          />
          <InfoRow
            label1="Reported By"
            value1="Anil Kumar"
            label2="Victim Name"
            value2="Suraj Kumar"
          />

          {/* Violation Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Violation Details</Text>
            <Text style={styles.text}>
              Detailed description of the violation...
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Immediate Action Targeted Date</Text>
            <Text style={styles.value}>12-March-2025</Text>
          </View>

          {/* Immediate Action */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Immediate Action</Text>
            <Text style={styles.text}>
              Details about the immediate action taken...
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Root Cause Analysis Targeted Date</Text>
            <Text style={styles.value}>12-March-2025</Text>
          </View>

          {/* Root Cause Analysis */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Root Cause Analysis</Text>
            <Text style={styles.text}>
              Explanation of the root cause analysis...
            </Text>
          </View>

          {/* Preventive Actions */}
          <View style={styles.section}>
            {preventiveActions.map((action, index) => (
              <View key={index} style={[styles.section, { marginTop: 0 }]}>
                <Text style={styles.preventiveTitle}>{action} Details</Text>
                <InputBox placeholder="Remark" />
                <View style={{ marginTop: -30 }}>
                  <InputBox placeholder="Current Status" />
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="folder-open-outline" size={24} color="white" />
            <Text style={styles.uploadText}>Upload Violation Image</Text>
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
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    height: "99%",
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    color: colors.primary,
    fontWeight: "bold",
  },
  closeText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.danger,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 15,
    color: colors.primary,
  },
  preventiveTitle: {
    fontSize: 16,
    color: colors.success,
    fontWeight: "500",
    marginBottom: -20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "gray",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.secondary,
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    color: "#505050",
    lineHeight: 20,
  },
  submitButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.success,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  uploadButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    marginTop: 0,
    marginBottom: 0,
    alignItems: "center",
  },

  uploadText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default ClosingReport;
