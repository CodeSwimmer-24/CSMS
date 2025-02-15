import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../../../global/colors";

const Preview = ({ prevStep, submitForm }) => {
  // Dummy form data
  const dummyData = [
    {
      title: "Personal Information",
      fields: {
        Date: "15-02-2025",
        Time: "09:10:21",
        "Current Shift": "Morning Shift",
        "Site Location": "EC01",
        "Permit Number": "12321",
      },
    },
    {
      title: "Address Details",
      fields: {
        "Company Supervisor/Line Manager Name": "Rakesh Kumar Singh",
        City: "New York",
        State: "NY",
        Zip: "10001",
      },
    },
    {
      title: "Employment Information",
      fields: {
        Company: "Tech Corp",
        Position: "Software Engineer",
        Experience: "5 Years",
      },
    },
    {
      title: "Education Background",
      fields: {
        Degree: "Bachelor's in Computer Science",
        University: "XYZ University",
        GraduationYear: "2018",
      },
    },
    {
      title: "Additional Information",
      fields: {
        Hobbies: "Reading, Hiking, Coding",
        Languages: "English, Spanish",
        Notes: "Available for remote work",
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.headerText}>Preview All Data</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {dummyData.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {Object.entries(section.fields).map(([key, value], index) => (
              <View key={index} style={styles.dataText}>
                <Text style={styles.keyTitle}> {key}</Text> <Text>{value}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={prevStep}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  inputBox: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 20,
    padding: 20,
  },
  section: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#fff",
    elevation: 4,
    borderRadius: 8,
  },
  keyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 5,
  },
  dataText: {
    // alignItems: "center",
    // flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 20,
  },
  button: {
    backgroundColor: "#888",
    padding: 12,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Preview;
