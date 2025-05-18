import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  isActive,
  style,
  onPress,
  title,
  loading = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, isActive ? styles.active : styles.inActive, style]}
      onPress={loading ? null : onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Text style={[styles.text, isActive ? styles.active : styles.inActive]}>
          {title}
        </Text>
      )}
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
  active: {
    backgroundColor: "#FB7360",
    borderColor: "#FB7360",
    color: "#FFFFFF",
  },
  inActive: {
    backgroundColor: "#FDFDFD",
    borderColor: "#FB7360",
    color: "#FB7360",
  },
});
