import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { colors } from "../../../global/colors";
import ClosingReport from "../ViolationForm/ClosingReport";

// Invoice Card Component
const InvoiceCard = ({ title, count, date, onPress }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <TouchableOpacity onPress={() => onPress(title, date)} style={styles.card}>
      <View style={styles.cardHeader}>
        {/* Title & Date */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>

        {/* Count Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>

        {/* Edit Button */}
        <TouchableOpacity>
          <Text style={styles.editText}>RMM</Text>
        </TouchableOpacity>
      </View>

      {/* Expandable Content */}
      {expanded && (
        <View style={styles.content}>
          <Text style={styles.closingText}>Closing Report</Text>
          <AntDesign name="arrowright" size={20} color={colors.danger} />
        </View>
      )}
    </TouchableOpacity>
  );
};

// CloseViolation Component
const CloseViolation = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Function to open modal with selected title
  const handleOpenModal = (title, date) => {
    setSelectedTitle(title);
    setModalVisible(true);
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      {/* Invoice Cards */}
      <InvoiceCard
        title="LWRMM01"
        count={2}
        date="12-11-2024"
        onPress={handleOpenModal}
      />
      <InvoiceCard
        title="LWRMM02"
        count={5}
        date="12-11-2024"
        onPress={handleOpenModal}
      />

      {/* Closing Report Bottom Modal */}
      <ClosingReport
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        selectedDate={selectedDate}
        title={selectedTitle} // Pass selected title to modal
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 22,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    flex: 1,
    marginLeft: 8,
  },
  infoIcon: {
    marginRight: 6,
  },
  badge: {
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
  },
  editText: {
    color: colors.secondary,
    fontSize: 14,
    marginLeft: 10,
  },
  content: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  closingText: {
    fontWeight: "400",
    color: colors.danger,
  },
});

export default CloseViolation;
