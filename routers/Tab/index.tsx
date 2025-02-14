import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../global/colors";
import HomeScreen from "../../screens/Home";

const DashboardScreen = () => (
  <View style={styles.screen}>
    <Text>Dashboard Screen</Text>
  </View>
);
const AssignTaskScreen = () => (
  <View style={styles.screen}>
    <Text>Assign Task Screen</Text>
  </View>
);
const AccountScreen = () => (
  <View style={styles.screen}>
    <Text>Account Screen</Text>
  </View>
);

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#B0B0B0",

        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          paddingTop: 10,
        },
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Home") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Dashboard") {
            return (
              <MaterialCommunityIcons
                name={focused ? "view-grid" : "view-grid-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Assign Task") {
            return (
              <Ionicons
                name={focused ? "document-text" : "document-text-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Assign Task" component={AssignTaskScreen} />
      <Tab.Screen name="Profile" component={AccountScreen} />
    </Tab.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabNavigator;
