import React, { useState } from "react";
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
import { Entypo } from "@expo/vector-icons";

// Reusable Row Component
const InfoRow = ({ label1, value1, label2, value2 }) => (
  <View style={styles.infoRow}>
    <View style={styles.section}>
      <Text style={styles.label}>{label1}</Text>
      <Text style={styles.value}>{value1}</Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.label}>{label2}</Text>
      <Text style={styles.value}>{value2}</Text>
    </View>
  </View>
);

const Kapa = ({ isVisible, onClose, title, selectedDate }) => {
  const [showDetails, setShowDetails] = useState(false);

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
            <Text style={styles.heading}>Level 1</Text>
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

          {/* Violation Details Section */}
          <View style={styles.section}>
            <TouchableOpacity
              onPress={() => setShowDetails(!showDetails)}
              style={styles.toggleButton}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.toggleButtonText}>
                  {showDetails
                    ? "Hide Violation Details"
                    : "View Violation Details"}
                </Text>
                <Entypo
                  name={showDetails ? "chevron-thin-up" : "chevron-thin-down"}
                  size={20}
                  color={colors.primary}
                />
              </View>
              {showDetails && (
                <Text style={styles.text}>
                  At BrainCraft, we specialize in crafting custom websites,
                  e-commerce platforms, mobile apps, and tailored web solutions
                  to meet the unique needs of your business. Whether you're
                  looking to create a stunning website, build a powerful online
                  store, or develop a mobile app that connects with your
                  audience, we’ve got you covered.
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View style={styles.inputSection}>
            <InputBox placeholder="Immediate Action" label="Immediate Action" />
            <InputBox placeholder="Target Date/Time" label="Target Date/Time" />
          </View>

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
    height: "95%",
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
  toggleButton: {
    justifyContent: "space-between",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    color: colors.secondary,
    lineHeight: 20,
    marginTop: 10,
  },
  inputSection: {
    marginTop: 20,
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
  uploadText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default Kapa;
