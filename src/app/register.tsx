import { Image, View } from "react-native";
import React from "react";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Input } from "@/components/input";
import { Link } from "expo-router";
import { Button } from "@/components/button";

export default function Register() {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full p-3 mx-5 rounded-xl">
        <Input>
          <FontAwesome6
            name="user-circle"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Nome Completo" />
        </Input>
        <Input>
          <MaterialIcons
            name="alternate-email"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Email" />
        </Input>
        <Button>
          <Button.Title>COMPRAR INGRESSO</Button.Title>
        </Button>
      </View>
      <Link className="text-zinc-200" href="/">
        Já possui ingresso?
      </Link>
    </View>
  );
}
