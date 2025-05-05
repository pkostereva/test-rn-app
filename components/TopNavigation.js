import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TopNavigation({ onPress, isEditable }) {
  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require("../assets/icons/Back.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isEditable ? (
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/icons/Edit.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <Text style={styles.text}>Добавить нового</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    height: 44,
    width: 44,
    alignItems: "center",
  },
  icon: {
    height: 44,
    width: 44,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    marginRight: 101.5,
  },
});
