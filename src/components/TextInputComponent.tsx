import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface CustomTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export default function CustomTextInput({
  label,
  value,
  error,
  onChangeText,
  ...inputProps
}: CustomTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={[
            styles.input,
            isFocused && styles.inputFocused,
            error && styles.inputError,
          ]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...inputProps}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  inputFocused: {
    borderColor: "#007AFF", // iOS blue
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 3,
  },
});
