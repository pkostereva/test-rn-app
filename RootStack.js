import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientProfile from "./screens/ClientProfile";
import ClientsList from "./screens/ClientsList";
import ClientForm from "./screens/ClientForm";
import NavigationIcon from "./components/NavigationIcon";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerShadowVisible: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerLeft: () => (
          <NavigationIcon
            onPress={() => navigation.goBack()}
            iconSource={require("./assets/icons/Back.png")}
          />
        ),
      })}
    >
      <Stack.Screen
        name={"ClientsList"}
        component={ClientsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ClientProfile"}
        component={ClientProfile}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
          headerRight: () => (
            <NavigationIcon
              onPress={() =>
                navigation.navigate("EditClient", {
                  clientData: route.params.clientData,
                })
              }
              iconSource={require("./assets/icons/Edit.png")}
            />
          ),
        })}
      />
      <Stack.Screen
        name={"AddClient"}
        component={ClientForm}
        options={{
          headerTitle: "Добавить нового",
        }}
      />
      <Stack.Screen
        name={"EditClient"}
        component={ClientForm}
        options={{
          headerTitle: "Редактировать клиента",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FDFDFD",
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: "#212322",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    lineHeight: 1.2,
  },
});
