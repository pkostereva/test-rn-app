import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton.js";
import NavigationIcon from "../components/NavigationIcon.js";

export default function ClientProfile({ route }) {
  const navigation = useNavigation();
  const clientData = route.params?.clientData ?? {
    id: "",
    avatar: "",
    fullName: "",
    phoneNumber: "",
    city: "",
    biography: "",
  };

  // Переопределить headerRight, чтобы передавать данные
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NavigationIcon
          onPress={() =>
            navigation.navigate("EditClient", {
              clientData: clientData,
            })
          }
          iconSource={require("../assets/icons/Edit.png")}
        />
      ),
    });
  }, [navigation, clientData]);

  const paragraphs = clientData.biography.split("\n\n");

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.clientDetailsContainer}>
          <Image source={clientData.avatar} style={styles.image} />
          <Text style={styles.h1}>{clientData.fullName}</Text>
          <Text style={[styles.regularText, styles.h3]}>{clientData.city}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Чат" isActive={false} style={{ flex: 1 }} />
          <CustomButton title="Звонок" isActive style={{ flex: 1 }} />
        </View>
        <Text style={styles.title}>Биография</Text>
        {paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.regularText}>
            {paragraph}
          </Text>
        ))}
        <CustomButton
          title="Показать больше"
          isActive={false}
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 24,
    backgroundColor: "#FDFDFD",
  },
  clientDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 32,
  },
  image: {
    marginBottom: 16,
  },
  h1: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    marginBottom: 4,
  },
  h3: {
    fontSize: 13,
    lineHeight: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 72,
    gap: 12,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  regularText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#A3A3A3",
    lineHeight: 24,
  },
  button: {
    marginTop: 40,
    flex: 1,
  },
});
