import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import api from "./services/api";

export default function App() {
  useEffect(() => {
    api.get("/ping").then((res) => console.log(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello TypeScript Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
