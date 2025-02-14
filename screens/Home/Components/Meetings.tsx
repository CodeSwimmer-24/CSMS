import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../global/colors";

const projects = [
  { title: "Risk Assesment", status: "Ongoing", color: "#3b82f6" },
  { title: "List of Activity", status: "In Process", color: "#3b82f6" },
  { title: "Method Statement", status: "Go to task", color: "#ef4444" },
  { title: "Hazzard Mapping", status: "On-hold", color: "#3b82f6" },
  { title: "JHA", status: "Go to task", color: "#ef4444" },
  { title: "RCRM", status: "On-hold", color: "#3b82f6" },
];

const TaskCard = ({ title, status, color }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={[styles.cardStatus, { color }]}>{status} →</Text>
    </TouchableOpacity>
  );
};

export default function Meetings() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}># Projects</Text>
      <View style={styles.grid}>
        {projects.map((item, index) => (
          <TaskCard key={index} {...item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: 80,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: colors.primary,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#faf9f9",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: colors.primary,
  },
  cardStatus: {
    fontSize: 14,
    fontWeight: "500",
  },
});
