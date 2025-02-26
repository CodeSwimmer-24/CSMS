import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
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
const FormCard = ({ title }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

// Main Component
const Accident = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
        <FlatList
          data={formsData}
          renderItem={({ item }) => <FormCard title={item.title} />}
          keyExtractor={(item) => item.id}
          numColumns={2} // Grid Layout
          columnWrapperStyle={styles.row} // Space between columns
          contentContainerStyle={styles.listContent} // Avoid cut-off at bottom
          scrollEnabled={false} // Prevents FlatList from handling scroll
        />
      </ScrollView>

      {/* Floating Plus Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons name="plus" size={30} color="white" />
      </TouchableOpacity>

      {/* Bottom Popup Modal */}
      {modalVisible && (
        <AccidentForm
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
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
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  listContent: {
    paddingBottom: 80, // Space for floating button
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default Accident;
