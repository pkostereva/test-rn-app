import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LabeledInput(props) {
  return (
    <View>
      <Text style={styles.inputTitle}>{props.inputTitle}</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        multiline={props.multiline}
        numberOfLines={props.multiline ? 4 : 1}
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
