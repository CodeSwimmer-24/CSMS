import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icons
import { colors } from "../../../global/colors";

const InvoiceCard = ({ title, count, date }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setExpanded(!expanded)}
    >
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
          <Text style={styles.editText}>KAPA</Text>
        </TouchableOpacity>
      </View>

      {/* Expandable Content */}
      {expanded && (
        <View style={styles.content}>
          <Text>Invoice Details...</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const OpenViolation = () => {
  return (
    <View style={styles.container}>
      <InvoiceCard title="Line Walk" count={2} date="12-11-2024" />
      <InvoiceCard title="TNT Audit" count={5} date="12-11-2024" />
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
  },
});

export default OpenViolation;
