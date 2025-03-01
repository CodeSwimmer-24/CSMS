import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors } from "../../../global/colors";
import InputBox from "../../../components/InputBox";
import Feather from "@expo/vector-icons/Feather";

const Grievances = ({ setModalVisible, modalVisible, selectedForm }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShowDatePicker(Platform.OS === "ios"); // Keep open for iOS, auto-close for Android
  };

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection="down"
      style={styles.bottomModal}
      backdropColor="black"
      backdropOpacity={0.7}
    >
      <View style={styles.modalContent}>
        <ScrollView>
          {/* Modal Header */}
          <View style={styles.header}>
            <Text style={styles.modalTitle}>{selectedForm?.title}</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.close}>CLOSE</Text>
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <InputBox
              label="Feedback Shared By"
              placeholder="Enter Name who Shared Feedback"
            />
            <InputBox
              label="Feedback Shared Through"
              placeholder="Mention Name or (Self)"
            />
            <InputBox label="Incharge Name" placeholder="Enter Incharge Name" />
            <InputBox
              label="Explain your Problem"
              placeholder="Explain your Problem in detail."
            />

            {/* Date Picker Input */}
            <Text style={styles.label}>Select Date</Text>
            <TouchableOpacity
              style={styles.dateInput}
              onPress={() => setShowDatePicker(true)}
            >
              <Feather name="calendar" size={20} color={colors.primary} />
              <Text style={styles.dateText}>
                {date.toLocaleDateString("en-GB")}
              </Text>
            </TouchableOpacity>

            {/* Date Picker Component */}
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
                themeVariant="dark"
              />
            )}
          </View>

          {/* Upload Photo Button */}
          <TouchableOpacity style={styles.uploadButton}>
            <Feather name="camera" size={20} color="white" />
            <Text style={styles.uploadButtonText}>Upload Photo</Text>
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    padding: 22,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  close: {
    fontWeight: "700",
    fontSize: 16,
    color: colors.danger,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.primary,
    marginBottom: 5,
  },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  uploadButtonText: {
    marginLeft: 10,
    fontWeight: "600",
    color: "white",
  },
  submitButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 5,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Grievances;
