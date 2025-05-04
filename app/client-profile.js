import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Button from "../components/Button.js";
import TopNavigation from "../components/TopNavigation.js";

export default function ClientProfile() {
  const router = useRouter();
  const DATA = [
    {
      id: "1",
      user_avatar: require("../assets/images/user_avatar_1.png"),
      fullname: "Иван Игнатов",
      city: "Калининград",
      biography: `Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трёхлетней дочкой.${"\n\n"}По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.`,
    },
    {
      id: "2",
      user_avatar: require("../assets/images/user_avatar_2.png"),
      fullname: "Олег Иванов",
      city: "Москва",
      biography: `Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трёхлетней дочкой.${"\n\n"}По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.`,
    },
    {
      id: "3",
      user_avatar: require("../assets/images/user_avatar_3.png"),
      fullname: "Сергей Чернышев",
      city: "Казань",
      biography: `Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трёхлетней дочкой.${"\n\n"}По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.`,
    },
  ];
  const { id } = useLocalSearchParams();
  const client = DATA.find((item) => item.id === id);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <TopNavigation
          isEditable={true}
          onPress={() => router.push({ pathname: "/clients-list" })}
        />
        <View style={styles.userDetailsContainer}>
          <Image source={client.user_avatar} style={styles.image} />
          <Text style={styles.h1}>{client.fullname}</Text>
          <Text style={[styles.regularText, styles.h3]}>{client.city}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Чат" variant="secondary" style={{ flex: 1 }} />
          <Button title="Звонок" variant="primary" style={{ flex: 1 }} />
        </View>
        <Text style={styles.title}>Биография</Text>
        <Text style={styles.regularText}>{client.biography}</Text>
        <Button
          title="Показать больше "
          variant="secondary"
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 24,
    flex: 1,
  },
  userDetailsContainer: {
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
