import { Input } from "@/components/input";
import { Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full p-3 mx-5 rounded-xl">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder="Código do Ingresso" />
        </Input>
        <Button>
          <Button.Title>ACESSAR CREDENCIAL</Button.Title>
        </Button>
      </View>
      <Link className="text-zinc-200" href="/register">
        Ainda não possui ingresso?
      </Link>
    </View>
  );
}
