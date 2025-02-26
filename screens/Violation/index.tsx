import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../global/colors";
import DisplayAccidentData from "./Display/DisplayAccidentData";
import AccidentForm from "./Form/AccidentForm";
import ViolationForm from "./ViolationForm/ViolationForm";
import DisplayViolationData from "./DisplayViolationData/DisplayViolationData";

// Data for Forms
const formsData = [
  {
    id: "1",
    title: "Low Potential Near Miss",
    description: "Details about Low Potential Near Miss.",
  },
  {
    id: "7",
    title: "High Potential Near Miss",
    description: "Details about High Potential Near Miss.",
  },
  { id: "2", title: "First Aid's", description: "Details about First Aid's." },
  {
    id: "3",
    title: "Lost Time Injury",
    description: "Details about Lost Time Injury.",
  },
  {
    id: "4",
    title: "Permanent Disability",
    description: "Details about Permanent Disability.",
  },
  {
    id: "5",
    title: "Dangerous Occurrence",
    description: "Details about Dangerous Occurrence.",
  },
  {
    id: "6",
    title: "Medical Treatment Case",
    description: "Details about Medical Treatment Case.",
  },
  {
    id: "10",
    title: "Restricted Work Case",
    description: "Details about Restricted Work Case.",
  },
  {
    id: "8",
    title: "High Level Property Damage",
    description: "Details about High Level Property Damage.",
  },
  {
    id: "9",
    title: "Low Level Property Damage",
    description: "Details about Low Level Property Damage.",
  },
];

// Card Component
const FormCard = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.statusRow}>
        <FontAwesome5 name="arrow-right" size={14} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

// Main Component
const Violation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  // Open Modal with Data
  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.heading}>Violation / Good Observation</Text>
          <Text style={styles.description}>
            You have to fill all the forms on a daily basis, so that the record
            is maintained. All the details can be seen on the office admin site.
          </Text>
        </View>

        {/* Grid Layout for Cards */}
        <View style={styles.gridContainer}>
          {formsData.map((item) => (
            <FormCard
              key={item.id}
              title={item.title}
              onPress={() => openModal(item)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Floating Plus Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setFormOpen(true)}
      >
        <MaterialCommunityIcons name="plus" size={30} color="white" />
      </TouchableOpacity>

      {formOpen && (
        <ViolationForm modalVisible={formOpen} setModalVisible={setFormOpen} />
      )}
      {/* Bottom Popup Modal */}
      {modalVisible && (
        <DisplayViolationData
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedItem={selectedItem}
        />
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
  },
  description: {
    fontSize: 14,
    color: "white",
    marginVertical: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 25,
  },
  card: {
    width: "48%", // 2 columns with spacing
    marginBottom: 15,
    padding: 20,
    borderRadius: 10, // Rounded corners
    backgroundColor: "#F3F6FF", // Soft blue background
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 5,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  /* Floating Plus Button */
  floatingButton: {
    position: "absolute",
    right: 40,
    bottom: 50,
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});

export default Violation;
