import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal"; // Correct import for react-native-modal
import { colors } from "../../global/colors";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

const WhistleBlow = ({ isModalVisible, toggleModal }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      style={styles.modalContainer}
      backdropOpacity={0.5}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Whistle Blow</Text>
        <InputBox
          label="Your Concern"
          placeholder="Describe your issue here..."
        />
        <Button text="Submit" routeName="" onPress={toggleModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: colors.primary,
  },
});

export default WhistleBlow;
