import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons"; // Import Feather icons
import { colors } from "../../../global/colors";
import Kapa from "../ViolationForm/Kapa";

const InvoiceCard = ({ title, count, date, onPress }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <TouchableOpacity onPress={() => onPress(title, date)} style={styles.card}>
      <View style={styles.cardHeader}>
        {/* Expand Icon */}
        <Feather
          name={expanded ? "chevron-down" : "chevron-right"}
          size={18}
          color="black"
        />

        {/* Title */}

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>

        {/* Info Icon */}
        <Feather name="info" size={14} color="#999" style={styles.infoIcon} />

        {/* Count Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>

        {/* Edit Button */}
        <TouchableOpacity>
          <Text style={styles.editText}>E22</Text>
        </TouchableOpacity>
      </View>

      {/* Expandable Content */}
      {expanded && (
        <View style={styles.content}>
          <Text
            style={{
              fontWeight: "600",
              color: colors.success,
            }}
          >
            KAPA Report
          </Text>
          <AntDesign name="arrowright" size={20} color={colors.success} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const OpenViolation = () => {
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
      <InvoiceCard
        title="LWRMM02"
        count={5}
        date="12-11-2024"
        onPress={handleOpenModal}
      />
      <InvoiceCard
        title="LWRMM05"
        count={5}
        date="12-11-2024"
        onPress={handleOpenModal}
      />

      {/* Closing Report Bottom Modal */}
      <Kapa
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
    color: "blue",
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
});

export default OpenViolation;
