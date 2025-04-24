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
import Entypo from "@expo/vector-icons/Entypo";
import Leavel2 from "./DisplayViolationData/Leavel2";
import Leavel3 from "./DisplayViolationData/Leavel3";
import Kapa from "./ViolationForm/Kapa";
import Month1 from "./ViolationForm/Month1";
import Month2 from "./ViolationForm/Month2";
import Month3 from "./ViolationForm/Month3";

// Tab View
const Violation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "leavel1", title: "Leavel 1" },
    { key: "leavel2", title: "Leavel 2" },
    { key: "leavel3", title: "Leavel 3" },
    { key: "leavel4", title: "Close" },
    { key: "month1", title: "Month 1" },
    { key: "month2", title: "Month 2" },
    { key: "month3", title: "Month 3" },
  ]);

  const renderScene = SceneMap({
    leavel1: OpenViolation,
    leavel2: Leavel2,
    leavel3: Leavel3,
    leavel4: CloseViolation,
    month1: Month1,
    month2: Month2,
    month3: Month3,
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
          <TabBar
            {...props}
            style={{ backgroundColor: colors.primary }}
            indicatorStyle={{ backgroundColor: "white" }}
            activeColor="white"
            inactiveColor="rgba(255, 255, 255, 0.7)"
            scrollEnabled={true} // ✅ Allows horizontal scrolling if tabs overflow
            tabStyle={{ width: "auto" }} // ✅ Ensures each tab takes just enough space
          />
        )}
      />

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.bttnColor}>
          <Entypo name="plus" size={22} color="white" />
          <Text style={styles.bttnColor}> Log Violation</Text>
        </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Violation;
