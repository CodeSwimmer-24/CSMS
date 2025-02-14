import { View, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import Button from "../../components/Button";
import { colors } from "../../global/colors";

const WelcomeScreen = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={colors.primary} />
      <Text>Welcome to CSMS</Text>
      <View
        style={{
          padding: 20,
        }}
      >
        <Button routeName="LoginScreen" text="Continue With CSMS!" />
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;
