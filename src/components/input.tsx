import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

type InputProps = {
  children: ReactNode;
};

function Input({ children }: InputProps) {
  return (
    <View className="w-full h-16 flex-row items-center gap-2 px-4 rounded-lg border border-zinc-800 bg-zinc-900">
      {children}
    </View>
  );
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-zinc-100 text-lg font-regular"
      placeholderTextColor={colors.gray[200]}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
