import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, list, SafeAreaView, } from "react-native";
import Dashboard from "./Dashboard";
import { Stack } from "expo-router/stack";
export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
			 <Stack.Screen
        options={{
          title: "",
        }}
      />
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='default'
      ></StatusBar>
      <SafeAreaView >
        {/* <Stack 
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}> */}
        <Dashboard />
        {/* </Stack> */}
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
