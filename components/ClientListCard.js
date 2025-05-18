import { Image, StyleSheet, Text, View } from "react-native";

export default function ClientListCard({ avatar, isActive, fullName, city }) {
  return (
    // general
    <View style={styles.container}>
      {/* left start */}
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image source={avatar} style={styles.avatar}></Image>
          {isActive && (
            <Image
              source={require("../assets/icons/Ellipse.png")}
              style={styles.statusIndicator}
            ></Image>
          )}
        </View>
        <View>
          <Text style={styles.textFullname}>{fullName}</Text>
          <Text style={styles.textCity}>{city}</Text>
        </View>
      </View>
      {/* left end */}
      {/* right start */}
      <Image source={require("../assets/icons/Navigation.png")}></Image>
      {/* right end */}
    </View>
    // end general
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#FFFFFF",
    borderColor: "#F6F6F6",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    boxShadow: "2px 4px 12px rgba(246, 246, 246, 0.75)",
    marginBottom: 16,
  },
  imageContainer: {
    marginRight: 16,
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 44,
    height: 44,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  textFullname: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    fontWeight: "bold",
    color: "#212322",
    lineHeight: 24,
    marginBottom: 4,
  },
  textCity: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "#A3A3A3",
    lineHeight: 16,
  },
});
