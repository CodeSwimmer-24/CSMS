import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Task";
import Meetings from "./Components/Meetings";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <Tasks />
        <Meetings />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
