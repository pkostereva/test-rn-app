import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function LabeledInput({
  inputTitle,
  onChangeText,
  value,
  placeholder,
  multiline,
}) {
  return (
    <View>
      <Text style={styles.inputTitle}>{inputTitle}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  inputTitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#212322",
    marginLeft: 16,
    paddingVertical: 2.5,
    marginBottom: 4,
  },
});
