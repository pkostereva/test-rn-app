import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function NavigationIcon({ onPress, iconSource }) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={iconSource} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 44,
    width: 44,
  },
});
