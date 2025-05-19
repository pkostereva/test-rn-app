import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton.js";
import LabeledInput from "../components/LabeledInput.js";
import { useNavigation } from "@react-navigation/native";
import { getData, storeData } from "../utils/storage";

const formStructure = [
  { id: "photo", label: "Фото", placeholder: "Введите ссылку на фото" },
  { id: "fullName", label: "ФИО", placeholder: "Введите фамилию и имя" },
  {
    id: "phoneNumber",
    label: "Номер телефона",
    placeholder: "+7 (000) 000 00 00",
  },
  { id: "city", label: "Город", placeholder: "Выберите город" },
  {
    id: "biography",
    label: "Био",
    placeholder: "Укажите хобби, интересы, образование и стаж работы",
    multiline: true,
  },
];

export default function ClientForm({ route }) {
  const navigation = useNavigation();
  const clientData = route.params?.clientData ?? {
    id: "",
    avatar: "",
    fullName: "",
    phoneNumber: "",
    city: "",
    biography: "",
  };

  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    id: clientData.id ?? "",
    avatar: clientData.avatar ?? "",
    fullName: clientData.fullName ?? "",
    phoneNumber: clientData.phoneNumber ?? "",
    city: clientData.city ?? "",
    biography: clientData.biography ?? "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onPressButton = async () => {
    const existingClients = (await getData("clients")) || [];
    if (formData.id) {
      // Обновление клиента
      const updatedClients = existingClients.map((item) =>
        item.id === formData.id ? formData : item
      );
      await storeData("clients", updatedClients);
    } else {
      // Добавление нового клиента
      const newId = (existingClients.length + 1).toString();
      const newAvatar =
        (clientData.avatar ??= require("../assets/images/placeholder.png"));
      const newClient = { ...formData, id: newId, avatar: newAvatar };
      const updatedClients = [...existingClients, newClient];
      await storeData("clients", updatedClients);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80} // для iOS, на Android можно оставить 0
      >
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.formContainer}>
            {formStructure.map((item) => (
              <LabeledInput
                key={item.id}
                inputTitle={item.label}
                placeholder={item.placeholder}
                value={formData[item.id]}
                onChangeText={(text) => handleChange(item.id, text)}
                multiline={item.multiline}
              />
            ))}
          </ScrollView>
          <View style={styles.buttonWrapper}>
            <CustomButton
              title={isSaving ? "Сохраняю..." : "Сохранить"}
              isActive={!isSaving}
              onPress={async () => {
                setIsSaving(true);
                await onPressButton();
                setIsSaving(false);
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  formContainer: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  buttonWrapper: {
    paddingBottom: 24,
  },
});
