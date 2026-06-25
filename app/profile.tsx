import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Profile Page</Text>

      <Pressable
        className="bg-red-500 p-4 rounded-xl mt-4"
        onPress={() => router.back()}
      >
        <Text className="text-white">
          Назад
        </Text>
      </Pressable>
    </View>
  );
}