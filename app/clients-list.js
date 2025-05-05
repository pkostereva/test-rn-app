import { useRouter } from "expo-router";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ClientListCard from "../components/ClientListCard.js";
import CustomButton from "../components/CustomButton.js";
import Search from "../components/Search.js";

export default function ClientsList() {
  const router = useRouter();

  const DATA = [
    {
      id: "1",
      user_avatar: require("../assets/images/user_avatar_1.png"),
      fullname: "Иван Игнатов",
      city: "Калининград",
      isActive: false,
    },
    {
      id: "2",
      user_avatar: require("../assets/images/user_avatar_2.png"),
      fullname: "Олег Иванов",
      city: "Москва",
      isActive: false,
    },
    {
      id: "3",
      user_avatar: require("../assets/images/user_avatar_3.png"),
      fullname: "Сергей Чернышев",
      city: "Казань",
      isActive: true,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.screenHeading}>Клиенты</Text>
        <Search />
        <FlatList
          data={DATA}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/client-profile",
                  params: { id: item.id },
                })
              }
            >
              <ClientListCard
                user_avatar={item.user_avatar}
                fullname={item.fullname}
                city={item.city}
                isActive={item.isActive}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <CustomButton
          title="Добавить нового"
          isActive
          onPress={() => router.push("/create-client")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 24,
    gap: 8,
  },
  screenHeading: {
    color: "#212322",
    fontFamily: "Poppins-Bold",
    fontSize: 34,
  },
});
