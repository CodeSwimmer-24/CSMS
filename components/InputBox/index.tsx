import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

interface InputBoxProps {
  label: string;
  placeholder: string;
}

const InputBox: React.FC<InputBoxProps> = ({ label, placeholder }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 5,
    color: "#023047",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default InputBox;
