import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ScreenType {
  type: "order" | "cancelled";
}

interface ActionButtonComponentProps {
  screen: ScreenType;
  onSelect: (screen: ScreenType) => void;
}

export default function ActionButtonComponent({
  screen,
  onSelect,
}: ActionButtonComponentProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onSelect(screen)}>
        <Text style={styles.text}>{screen.type.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 12,
    margin: 5,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
