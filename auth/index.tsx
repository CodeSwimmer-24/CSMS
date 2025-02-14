import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import InputBox from "../components/InputBox";
import { colors } from "../global/colors";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

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
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome6 name="whatsapp" size={26} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialIcons name="call" size={26} color={colors.primary} />
        </TouchableOpacity>
      </View>
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
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 5,
    color: colors.primary,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
    marginTop: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
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
    padding: 10,
    width: "45%",
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  footerText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
  },
  loginText: {
    color: "#00aaff",
    fontWeight: "600",
  },
});

export default RegisterScreen;
