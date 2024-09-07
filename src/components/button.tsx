import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";

type ButtonProps = {
  title: string;
};

export function ButtonComponent({ title }: ButtonProps) {
  return (
    <View>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.orange[500],
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.green[500],
  },
});
