import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../global/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" />

      {/* Left Side - Greeting */}
      <View>
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.username}>Rajesh Mehta</Text>
      </View>

      {/* Right Side - Icons */}
      <View style={styles.iconContainer}>
        {/* Notification Icon with Badge */}
        <View style={styles.notificationWrapper}>
          <Ionicons name="notifications-outline" size={28} color="white" />
          <View style={styles.badge} />
        </View>

        {/* Menu Icon */}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary, // Blue color
    paddingHorizontal: 20,
    paddingVertical: 25,
    // paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 0 0, // Dynamic for different devices
    // paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  username: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  notificationWrapper: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 3,
    right: 3,
    width: 8,
    height: 8,
    backgroundColor: "orange",
    borderRadius: 10,
  },
});

export default Header;
