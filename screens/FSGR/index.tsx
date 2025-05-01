import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../global/colors";
import Feedback from "./Feedback/Feedback";
import Suggestion from "./Suggestion/Suggestion";
import Grievances from "./Grievances/Grievances";
import Report from "./Report/Report";
// Define Type for Forms
interface FormItem {
  id: string;
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

// Forms Data
const forms: FormItem[] = [
  { id: "1", title: "FeedBack", icon: "feedback" },
  { id: "2", title: "Suggestion", icon: "wifi-calling-3" },
  { id: "3", title: "Grievances/Complaints", icon: "format-list-bulleted-add" },
  { id: "4", title: "Report", icon: "report" },
];

export default function FSGR() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState<FormItem | null>(null);

  const openModal = (form: FormItem) => {
    setSelectedForm(form);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedForm(null);
  };

  return (
    <>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Audits</Text>
        <Text style={styles.headerDescription}>
          You have to fill all the forms on a daily basis, so that the record is
          maintained.
        </Text>
      </View>

      {/* Forms Grid */}
      <View style={styles.container}>
        {forms.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => openModal(item)}
            activeOpacity={0.7}
          >
            <View style={styles.innerCard}>
              <MaterialIcons
                name={item.icon}
                size={30}
                color={colors.primary}
                style={styles.icon}
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <View style={styles.goButton}>
                  <Text style={styles.goButtonText}>Click To Go</Text>
                  <AntDesign
                    name="arrowright"
                    size={18}
                    color="gray"
                    style={styles.goButtonIcon}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modals - Open Based on Selection */}
      {modalVisible && selectedForm && (
        <>
          {selectedForm.title === "FeedBack" && (
            <Feedback
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              selectedForm={selectedForm}
            />
          )}
          {selectedForm.title === "Suggestion" && (
            <Suggestion
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              selectedForm={selectedForm}
            />
          )}
          {selectedForm.title === "Grievances/Complaints" && (
            <Grievances
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              selectedForm={selectedForm}
            />
          )}
          {selectedForm.title === "Report" && (
            <Report
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              selectedForm={selectedForm}
            />
          )}
        </>
      )}
    </>
  );
}

// Styles
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    marginBottom: 5,
  },
  headerDescription: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  card: {
    width: "100%",
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  innerCard: {
    padding: 20,
  },
  icon: {
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
  },
  goButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#faf9f9",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  goButtonText: {
    fontSize: 12,
    color: "gray",
  },
  goButtonIcon: {
    marginLeft: 5,
  },
});
