import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { colors } from "../../global/colors";
import ViolationForm from "./ViolationForm/ViolationForm";
import OpenViolation from "./DisplayViolationData/OpenViolation";
import CloseViolation from "./DisplayViolationData/CloseViolation";

// Tab View
const Violation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "logged", title: "Open Violations" },
    { key: "closed", title: "Close Violations" },
  ]);

  const renderScene = SceneMap({
    logged: OpenViolation,
    closed: CloseViolation,
  });

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Swipeable Tabs */}
      <View style={styles.header}>
        <Text style={styles.heading}>Vialation Tracking</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => (
          <View style={{ backgroundColor: "red" }}>
            {/* Default TabBar */}
            <TabBar
              {...props}
              style={{ backgroundColor: colors.primary }} // 🔴 Change Tab Bar Color to Red
              indicatorStyle={{ backgroundColor: "white" }} // Underline Indicator Color
              activeColor="white" // Active Tab Text Color
              inactiveColor="rgba(255, 255, 255, 0.7)" // Inactive Tab Text Color
            />
          </View>
        )}
      />

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.bttnColor}>+ Log Violation</Text>
      </TouchableOpacity>

      {modalVisible && (
        <ViolationForm
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 14,
    color: "white",
    marginVertical: 10,
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  tabButton: {
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  tabText: {
    fontSize: 16,
    color: "red",
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabContent: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  floatingButton: {
    position: "absolute",
    right: 30,
    bottom: 40,
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5,
  },
  bttnColor: {
    color: "white",
    fontWeight: "400",
    fontSize: 16,
  },
});

export default Violation;
