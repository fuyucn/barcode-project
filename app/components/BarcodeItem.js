import { Text, View } from "react-native";
// type Props = { title: string }
// eslint-disable-next-line react/prop-types
const BarcodeItem = ({ title }) => {
  return <View className="flex justify-between gap-x-4 py-5 border-b border-gray-100">
    <View className='min-w-0 flex-auto'>
      <Text class="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</Text>
      <Text className="mt-1 truncate text-xs leading-5 text-gray-500">{title}</Text>
    </View>
  </View>;
};

export default BarcodeItem;