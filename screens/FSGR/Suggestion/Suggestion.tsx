import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../../global/colors";
import InputBox from "../../../components/InputBox";
import Feather from "@expo/vector-icons/Feather";

const Suggestion = ({ setModalVisible, modalVisible, selectedForm }) => {
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
            <InputBox label="FSGR Title" placeholder="Enter your FSGR Topic" />
            <InputBox
              label="Reporting Person Name"
              placeholder="Enter Reporting Person Name"
            />
            <InputBox
              label="Safety Supervisor Name"
              placeholder="Enter Safety Supervisor Name"
            />
            <InputBox label="Incharge Name" placeholder="Enter Incharge Name" />
            <InputBox label="Priority" placeholder="Set Priority" />
            <InputBox
              label="Explain your Problem"
              placeholder="Explain your Problem in detail."
            />
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

export default Suggestion;
