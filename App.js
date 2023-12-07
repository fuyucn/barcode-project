import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, list,SafeAreaView, } from "react-native";
import Dashboard from "./app/Dashboard";
export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='dark-content'
      > asd</StatusBar>
      <SafeAreaView >
        <Dashboard />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
