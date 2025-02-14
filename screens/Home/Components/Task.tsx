import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../global/colors";
import { useNavigation } from "@react-navigation/native";

const settingsOptions = [
  {
    id: 1,
    title: "Tool Box Meeting",
    description: "TBT, DJP, PPE CheckList, Tools Check List",
    icon: "document-text",
    color: "#6A3DF5",
    route: "ToolBokMeeting",
  },
  {
    id: 2,
    title: "Create FSGR",
    description: "Feedback, Suggation, Gravance, Report",
    icon: "bonfire",
    color: "#E76F51",
    route: "DailyJobPlan",
  },
  {
    id: 3,
    title: "Violation and Good Observation's",
    description: "Choose apps to allow.",
    icon: "checkmark-circle",
    color: "#9B51E0",
    route: "Violation",
  },
  {
    id: 4,
    title: "Accident and Incident",
    description: "Set daily limit of device",
    icon: "battery-full",
    color: "#2A9D8F",
    route: "Accident",
  },
];

const Tasks = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}># Daily Task's</Text>
      <View style={styles.grid}>
        {settingsOptions.map((item) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.route);
            }}
            key={item.id}
            style={styles.card}
          >
            {/* Icon */}
            <View
              style={[styles.iconContainer, { backgroundColor: item.color }]}
            >
              <Ionicons name={item.icon} size={24} color="white" />
            </View>

            {/* Text Content */}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>

            {/* Right Element (Switch or Arrow) */}
            {item.isSwitch ? (
              <Switch
                value={isBlocked}
                onValueChange={() => setIsBlocked(!isBlocked)}
              />
            ) : (
              <Ionicons name="chevron-forward" size={24} color="#999" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
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
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: "column",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    paddingVertical: 6,
    color: colors.primary,
  },
  description: {
    fontSize: 12,
    color: "#777",
    paddingBlock: 6,
  },
});

export default Tasks;
