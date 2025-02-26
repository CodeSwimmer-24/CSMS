import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./auth";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./auth/WelcomeScreen";
import BottomTabNavigator from "./routers/Tab";
import ToolBokMeeting from "./screens/ToolsBoxMeeting";
import ToolBoxTalk from "./screens/ToolsBoxMeeting/Components/TBT";
import DailyJobPlan from "./screens/ToolsBoxMeeting/Components/DJP";
import ToolsAndTackles from "./screens/ToolsBoxMeeting/Components/ToolsTackles";
import PPECheckList from "./screens/ToolsBoxMeeting/Components/PPE";
import FSGR from "./screens/FSGR";
import Accidents from "./screens/Accidents";
import Violation from "./screens/Violation";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="ToolBokMeeting" component={ToolBokMeeting} />
        <Stack.Screen name="ToolBokTalk" component={ToolBoxTalk} />
        <Stack.Screen name="DailyJobPlan" component={DailyJobPlan} />
        <Stack.Screen name="ToolsAndTackles" component={ToolsAndTackles} />
        <Stack.Screen name="PPECheckList" component={PPECheckList} />
        <Stack.Screen name="FSGR" component={FSGR} />
        <Stack.Screen name="Accidents" component={Accidents} />
        <Stack.Screen name="Violation" component={Violation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
