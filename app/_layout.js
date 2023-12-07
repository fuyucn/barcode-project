import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, list, SafeAreaView, } from "react-native";
import Dashboard from "./Dashboard";
import { Stack } from "expo-router/stack";
export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}> 
    </Stack> 
   
  );
}

