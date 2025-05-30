// app/_layout.tsx
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { colors } from "../styles";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function Layout() {
  useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.container,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.background,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
    fontFamily: "Poppins_400Regular",
  },
});
