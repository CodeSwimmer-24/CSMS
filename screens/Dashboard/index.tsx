import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../../global/colors";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  const [safeJobExecution, setSafeJobExecution] = useState(false);

  const menuItems = [
    { title: "Tool Box Meeting", route: "tbtHistory" },
    { title: "Daily Job Plan", route: "DailyJobPlan" },
    { title: "PPE Checklist", route: "PPEChecklist" },
    { title: "Tools and Tackles Checklist", route: "ToolsTacklesChecklist" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>

      {/* Content Section */}
      <ScrollView>
        <View style={styles.contentContainer}>
          {/* Safe Job Execution Section */}
          <View style={styles.safeJobContainer}>
            <TouchableOpacity
              onPress={() => setSafeJobExecution(!safeJobExecution)}
              style={[
                styles.safeJobButton,
                safeJobExecution ? null : styles.elevatedButton,
              ]}
            >
              <View style={styles.safeJobTextContainer}>
                <Text style={styles.safeJobTitle}>Safe Job Execution</Text>
                <Text style={styles.safeJobDescription}>
                  Please check TBT, DJP, PPE, Tools and Tackles Checklist.
                </Text>
              </View>
              <Entypo
                name={
                  safeJobExecution ? "chevron-thin-up" : "chevron-thin-down"
                }
                size={18}
                color={colors.primary}
              />
            </TouchableOpacity>

            {safeJobExecution && (
              <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate(item.route)}
                    style={styles.menuItem}
                  >
                    <Text style={styles.menuItemText}>{item.title}</Text>
                    <Entypo
                      name="chevron-thin-right"
                      size={16}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  contentContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  safeJobContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    width: "90%",
  },
  safeJobButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  elevatedButton: {
    elevation: 3,
  },
  safeJobTextContainer: {
    width: "80%",
  },
  safeJobTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
  },
  safeJobDescription: {
    color: "gray",
    fontSize: 12,
    paddingVertical: 10,
  },
  menuContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  menuItemText: {
    fontSize: 16,
    color: "#505050",
    paddingVertical: 5,
  },
});

export default Dashboard;
