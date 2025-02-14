import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../global/colors";
import { useNavigation } from "@react-navigation/native";

interface Button {
  text: string;
  routeName: string;
}

const Button: React.FC<Button> = ({ text, routeName }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routeName);
      }}
      style={styles.registerButton}
    >
      <Text style={styles.registerButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Button;
