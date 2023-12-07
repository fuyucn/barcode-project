import { Camera, useCodeScanner, useCameraPermission, useCameraDevice } from "react-native-vision-camera";
import { View, Text } from "react-native";
import { useEffect } from "react";
import { Stack } from "expo-router/stack";
export default CameraPage = () => {
  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`);
    }
  });
  const { hasPermission, requestPermission } = useCameraPermission();
  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  const device = useCameraDevice("back");

  if (!hasPermission) return <View><Text>no per</Text></View>;
  if (device == null) {
    return (
      <View>
        <Stack.Screen
          options={{
            title: "",
          }}
        />
        <Text>device null</Text>
      </View>);
  }
  return (
    <Camera
      // style={StyleSheet.absoluteFill}
      codeScanner={codeScanner}
      isActive={true}
    />
  );
};