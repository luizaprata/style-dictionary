import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, PixelRatio } from "react-native";
import * as variables from "./style-dictionary-dist/variables";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Testing</Text>
      <Text style={styles.p}>All done!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.brandColorPrimary1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeLg.number,
    color: variables.brandColorPrimary4,
  },
  p: {
    fontSize: PixelRatio.getFontScale() * variables.fontSizeSm.number,
    color: variables.neutralColor4,
  },
});
