import "@/styles/global.css";
import { StatusBar, View } from "react-native";
import { Slot } from "expo-router";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="dark-content" backgroundColor="black" translucent />
      <Slot />
    </View>
  );
}
