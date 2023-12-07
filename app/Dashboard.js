import { useState } from "react";
import { Pressable, Text, View, VirtualizedList, Alert } from "react-native";
import BarcodeItem from "./components/BarcodeItem";
import { Link } from "expo-router";
import { Stack } from "expo-router/stack";

export default () => {
  const [items, setItems] = useState([]);

  const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  return (
    <View className="h-full w-screen">
      <Stack.Screen
        options={{
          title: "",
        }}
      />
      {
        items.length > 0 ?
          <VirtualizedList
            initialNumToRender={4}
            renderItem={({ item }) =>
              <Link href={"item/" + item.id} className="bg-red-500" >
                <BarcodeItem title={item.title}></BarcodeItem>
              </Link>
            }
            keyExtractor={item => item.id}
            getItemCount={() => 0}
            getItem={getItem}
          />
          :
          <View className='flex-1 items-center justify-center'>
            <Text className="mb-4 text-base leading-7 text-gray-600">{"Empty list"}</Text>
            <Link href='/camera' asChild>
              <Pressable
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              // onPress={() => Alert.alert("Simple Button pressed")}
              >
                <Text className="text-white font-bold">Add New</Text>
              </Pressable>
            </Link>
          </View>
      }
    </View>);

};