import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

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
import { getData, storeData } from "../utils/storage";

const defaultClients = [
  {
    id: "1",
    avatar: require("../assets/images/1.png"),
    fullName: "Иван Игнатов",
    city: "Калининград",
    isActive: false,
    phoneNumber: "+79996574213",
    biography: `Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трёхлетней дочкой.${"\n\n"}По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.`,
  },
  {
    id: "2",
    avatar: require("../assets/images/2.png"),
    fullName: "Олег Иванов",
    city: "Москва",
    isActive: false,
    phoneNumber: "+79996574213",
    biography: `Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трёхлетней дочкой.${"\n\n"}По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.`,
  },
  {
    id: "3",
    avatar: require("../assets/images/3.png"),
    fullName: "Сергей Чернышев",
    city: "Казань",
    isActive: true,
    phoneNumber: "+79996574213",
    biography: `Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трёхлетней дочкой.${"\n\n"}По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.`,
  },
];

// const loadClients = async () => {
//   const storedClients = await getData("clients");
//   setAllClients(storedClients ?? []);
// };

export default function ClientsList() {
  const navigation = useNavigation();

  const [allClients, setAllClients] = useState([]);
  const [filter, setFilter] = useState("");

  useFocusEffect(
    useCallback(() => {
      const loadClients = async () => {
        const data = await getData("clients");
        setAllClients(data ?? []);
      };

      loadClients();
    }, [])
  );

  const filteredClients = allClients.filter((client) => {
    const search = filter.toLowerCase();
    return (
      client.fullName.toLowerCase().includes(search) ||
      client.city.toLowerCase().includes(search)
    );
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.screenHeading}>Клиенты</Text>
        <Search filter={filter} setFilter={setFilter} />
        <FlatList
          data={filteredClients}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.push("ClientProfile", {
                  clientData: {
                    id: item.id,
                    avatar: item.avatar,
                    fullName: item.fullName,
                    city: item.city,
                    phoneNumber: item.phoneNumber,
                    biography: item.biography,
                  },
                })
              }
            >
              <ClientListCard
                avatar={item.avatar}
                fullName={item.fullName}
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
          onPress={() => navigation.navigate("AddClient")}
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
    fontFamily: "PoppinsBold",
    fontSize: 34,
  },
});
