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

const Kapa3 = ({ isVisible, onClose, title, selectedDate }) => {
  const [showViolationDetails, setShowViolationDetails] = useState(false);
  const [showImmediateAction, setShowImmediateAction] = useState(false);
  const [showRootCause, setShowRootCause] = useState(false);
  const [preventiveActions, setPreventiveActions] = useState([{ id: 1 }]);

  const addPreventiveAction = () => {
    setPreventiveActions([...preventiveActions, { id: Date.now() }]);
  };

  const removePreventiveAction = (id) => {
    setPreventiveActions(
      preventiveActions.filter((action) => action.id !== id)
    );
  };

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
          <View style={styles.header}>
            <Text style={styles.heading}>Level 3</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>CLOSE</Text>
            </TouchableOpacity>
          </View>

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

          <TouchableOpacity
            onPress={() => setShowViolationDetails(!showViolationDetails)}
            style={styles.toggleButton}
          >
            <Text style={styles.sectionTitle}>Violation Details</Text>
            <Entypo
              name={
                showViolationDetails ? "chevron-thin-up" : "chevron-thin-down"
              }
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
          {showViolationDetails && (
            <View style={styles.box}>
              <Text style={styles.text}>
                Violation description goes here...
              </Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => setShowImmediateAction(!showImmediateAction)}
            style={styles.toggleButton}
          >
            <Text style={styles.sectionTitle}>Immediate Action</Text>
            <Entypo
              name={
                showImmediateAction ? "chevron-thin-up" : "chevron-thin-down"
              }
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
          {showImmediateAction && (
            <View style={styles.box}>
              <Text style={styles.text}>
                Immediate action details go here...
              </Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() => setShowRootCause(!showRootCause)}
            style={styles.toggleButton}
          >
            <Text style={styles.sectionTitle}>Root Cause Analysis</Text>
            <Entypo
              name={showRootCause ? "chevron-thin-up" : "chevron-thin-down"}
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
          {showRootCause && (
            <View style={styles.box}>
              <Text style={styles.text}>
                Root cause analysis details go here...
              </Text>
            </View>
          )}

          <View style={{ marginTop: 20 }}>
            <Text style={styles.sectionTitle}>Preventive Actions</Text>
            {preventiveActions.map((action) => (
              <View key={action.id} style={styles.preventiveActionRow}>
                <View style={{ flex: 1, marginTop: -30 }}>
                  <InputBox placeholder="Preventive Action" />
                </View>
                <TouchableOpacity
                  onPress={() => removePreventiveAction(action.id)}
                  style={styles.deleteButton}
                >
                  <Ionicons
                    name="close-circle"
                    size={24}
                    color={colors.danger}
                  />
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity
              style={styles.addButton}
              onPress={addPreventiveAction}
            >
              <Ionicons name="add-circle" size={24} color={colors.success} />
              <Text style={styles.addButtonText}>Add Preventive Action</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Ionicons name="checkmark-circle" size={24} color="white" />
            <Text style={styles.uploadText}>Submit Report</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { justifyContent: "flex-end", margin: 0 },
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
  heading: { fontSize: 22, color: colors.primary, fontWeight: "bold" },
  closeText: { fontSize: 16, fontWeight: "600", color: colors.danger },
  section: { marginTop: 20 },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: { fontSize: 12, color: "gray" },
  value: { fontSize: 16, fontWeight: "600", color: colors.secondary },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 15,
    color: colors.primary,
    // marginBottom: 10,
  },

  toggleText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },
  preventiveActionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  box: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 5,
  },
  text: { fontSize: 14, fontWeight: "300", color: "#505050", lineHeight: 20 },
  toggleButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  submitButton: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.success,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  uploadText: { color: "white", fontWeight: "600", marginLeft: 10 },
  deleteButton: {
    marginLeft: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    marginLeft: 5,
    color: colors.success,
    fontWeight: "600",
  },
});

export default Kapa3;
