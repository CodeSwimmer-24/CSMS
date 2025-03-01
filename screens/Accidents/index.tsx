import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../global/colors";
import AccidentForm from "./Form/AccidentForm";

// Data for Forms
const formsData = [
  { id: "1", title: "Low Potential Near Miss" },
  { id: "7", title: "High Potential Near Miss" },
  { id: "2", title: "First Aid's" },
  { id: "3", title: "Lost Time Injury" },
  { id: "4", title: "Permanent Disability" },
  { id: "5", title: "Dangerous Occurrence" },
  { id: "6", title: "Medical Treatment Case" },
  { id: "10", title: "Restricted Work Case" },
  { id: "8", title: "High Level Property Damage" },
  { id: "9", title: "Low Level Property Damage" },
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
const Accident = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Open Form Modal with Selected Item
  const openForm = (item) => {
    setSelectedItem(item);
    setFormOpen(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.heading}>Accident's / Incident's</Text>
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
              onPress={() => openForm(item)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Form Modal */}
      {formOpen && (
        <AccidentForm
          modalVisible={formOpen}
          setModalVisible={setFormOpen}
          title={selectedItem?.title}
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
    width: "48%",
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F3F6FF",
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
});

export default Accident;
