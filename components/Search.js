import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

export default function Search() {
  const [text, onChangeText] = React.useState("Поиск");
  return (
    <View style={styles.searchSection}>
      <Image source={require("../assets/icons/Search.png")} />
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 600,
    color: "#A3A3A3",
  },
});
