import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const { control, handleSubmit } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <View className="flex-1 justify-center px-6 bg-slate-100">
      <Text className="text-3xl font-bold text-center mb-8">
        Вхід
      </Text>

      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="bg-white border border-gray-300 rounded-xl p-4 mb-4"
            placeholder="Email"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            className="bg-white border border-gray-300 rounded-xl p-4 mb-6"
            placeholder="Пароль"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Pressable
        className="bg-blue-500 p-4 rounded-xl"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white text-center font-bold">
          Увійти
        </Text>
      </Pressable>
    </View>
  );
}