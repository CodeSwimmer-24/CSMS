import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import InputBox from "../components/InputBox";
import { colors } from "../global/colors";
import Button from "../components/Button";
import WistleBlow from "./WistleBlow/WistleBlow";

const RegisterScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <TouchableOpacity style={styles.backButton}>
        <Entypo name="chevron-left" size={24} color={colors.primary} />
      </TouchableOpacity>

      <Text style={styles.title}>Hello! Welcome to CSMS.</Text>
      <Text style={styles.subtitle}>
        This is a CSMS platform to organize the Saty management System and to
        make the working more secure.
      </Text>

      <View style={styles.inputContainer}>
        <InputBox
          label="Enter Your UserId"
          placeholder="Please Enter Your UserId"
        />
        <InputBox
          label="Enter Your Password"
          placeholder="Please Enter Your Password"
        />
      </View>

      <Button routeName="BottomTabNavigator" text="Let's Gooo..." />

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>For Technical Help</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={toggleModal}>
          <MaterialCommunityIcons
            name="whistle-outline"
            size={20}
            color={colors.primary}
          />
          <Text style={styles.whistleblow}>Whistle Blow</Text>
        </TouchableOpacity>
      </View>
      {isModalVisible && (
        <WistleBlow isModalVisible={isModalVisible} toggleModal={toggleModal} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 44,
    fontWeight: "600",
    marginBottom: 10,
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    color: "#adb5bd",
    marginBottom: 30,
  },
  inputContainer: {
    marginTop: 20,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  orText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    padding: 12,
    width: "95%",
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  whistleblow: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.primary,
    marginLeft: 10,
  },
});

export default RegisterScreen;
