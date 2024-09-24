import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({
  mainStyle,
  keyboardType,
  setPlaceholder,
  setPlaceholderTextColor,
  value,
  onChangeText,
  maxLength,
}) => {
  return (
    <TextInput
      style={[styles.input, mainStyle]}
      keyboardType={keyboardType}
      placeholder={setPlaceholder}
      placeholderTextColor={setPlaceholderTextColor}
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      returnKeyType="done"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
  },
});

export { CustomTextInput };
