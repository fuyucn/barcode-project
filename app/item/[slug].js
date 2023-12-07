import { View, Text, Pressable } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import PrimaryButton from "../components/button/PrimaryButton";
export default () => {
  const { slug } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: "" + slug,
        }}
      />
      <View className='flex flex-col py-4'>
        <Text className=' text-center text-2xl font-bold text-gray-900 sm:pr-12 leading-8'>title</Text>
        <Text>item: {slug}</Text>
        <View className='flex flex-col py-4 px-4'>
          <PrimaryButton className='mt-6 flex w-full items-center justify-center 
          rounded-md border border-transparent bg-indigo-600 
          px-8 py-3  hover:bg-indigo-700' text="click" />
          <Pressable className='mt-6 flex w-full items-center justify-center 
          rounded-md border border-red-500 bg-white
          px-8 py-3  hover:border-red-700'>
            <Text className='text-base font-medium text-red-500 hover:text-red-700'>asd</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};