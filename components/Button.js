import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.variant === "primary"
          ? { backgroundColor: "#FB7360", borderColor: "#FB7360" }
          : { backgroundColor: "#FDFDFD", borderColor: "#FB7360" },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text
        style={[
          styles.text,
          { color: props.variant === "primary" ? "#FFFFFF" : "#FB7360" },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 52,
    borderRadius: 16,
    borderColor: "#FB7360",
    borderWidth: 1.5,
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
  },
});
