import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../global/colors";

const DisplayAccidentData = ({
  modalVisible,
  setModalVisible,
  selectedItem,
}) => {
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modal}
      backdropOpacity={0.5}
      swipeDirection="down"
      onSwipeComplete={() => setModalVisible(false)}
    >
      <View style={styles.modalContent}>
        {/* Header */}
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>
            {selectedItem?.title || "Accident Details"}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={colors.danger}
            />
          </TouchableOpacity>
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <InfoRow
            label="Accident Date:"
            value={selectedItem?.date || "12 Feb 2025"}
          />
          <InfoRow
            label="Location:"
            value={selectedItem?.location || "RMM Coal"}
          />
          <InfoRow
            label="On-Duty Safety Supervisor:"
            value={selectedItem?.supervisor || "Ajay Kumar Singh"}
          />
          <InfoRow
            label="Victim Name:"
            value={selectedItem?.victim || "Raj Kumar Das"}
          />
          <InfoRow
            label="Accident Report/Details:"
            value={
              "Help people interested in this repository understand your project by adding a README. Help people interested in this repository understand your project by adding a README. "
            }
          />
        </ScrollView>
      </View>
    </Modal>
  );
};

// Reusable Component for Displaying Information Rows
const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 25,
    height: "85%", // Allows proper scrolling
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.primary,
  },
  scrollContainer: {
    flexGrow: 1, // Enables scrolling
    paddingBottom: 20, // Extra space at the bottom for better scrolling
  },
  infoRow: {
    flexDirection: "column",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
  },
  infoValue: {
    fontSize: 15,
    color: "#505050",
    marginTop: 5,
  },
});

export default DisplayAccidentData;
