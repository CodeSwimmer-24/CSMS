import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../global/colors";

// Define Type for Forms
interface FormItem {
  id: string;
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  route?: string;
}

// Forms Data
const forms: FormItem[] = [
  {
    id: "1",
    title: "Tool Box Talk Form",
    icon: "file-document-outline",
    route: "ToolBokTalk",
  },
  { id: "2", title: "Daily Job Plan Form", icon: "run" },
  { id: "3", title: "Tools & Tackles Check List", icon: "tools" },
  { id: "4", title: "PPE Check List", icon: "hard-hat" },
];

export default function ToolBoxMeetingScreen() {
  const navigation = useNavigation<any>(); // Fix TypeScript error for navigation

  return (
    <>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tool Box Meeting</Text>
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
            onPress={() => item.route && navigation.navigate(item.route)}
          >
            <View style={styles.innerCard}>
              <MaterialCommunityIcons
                name={item.icon}
                size={40}
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
