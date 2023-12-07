
import {Pressable,Text} from "react-native";

export default PrimaryButton = ({text})=>{
  return (
    <Pressable className='mt-6 flex w-full items-center justify-center 
          rounded-md border border-transparent bg-indigo-600 
          px-8 py-3  hover:bg-indigo-700'>
      <Text className='text-base font-medium text-white hover:bg-indigo-700'>{text}</Text>
    </Pressable>);
};