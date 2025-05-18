import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
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

export default function ClientsList({ route }) {
  const navigation = useNavigation();

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

  const [allClients, setAllClients] = useState(defaultClients);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (route.params?.clientData) {
      const clientData = { ...route.params.clientData };
      clientData.avatar ??= require("../assets/images/placeholder.png");

      setAllClients((prev) => {
        if (clientData.id) {
          // Обновление клиента
          return prev.map((item) =>
            item.id === clientData.id ? clientData : item
          );
        } else {
          // Добавление нового клиента
          const newId = (prev.length + 1).toString();
          return [...prev, { ...clientData, id: newId }];
        }
      });
    }
  }, [route.params?.clientData]);

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
