import { useRouter } from "expo-router";
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
import TopNavigation from "../components/TopNavigation.js";

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

export default function CreateClient() {
  const [formData, setFormData] = useState({
    photo: "",
    fullName: "",
    phoneNumber: "",
    city: "",
    biography: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80} // для iOS, на Android можно оставить 0
      >
        <TopNavigation
          onPress={() => router.push({ pathname: "/clients-list" })}
        />

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
            <CustomButton title="Добавить" isActive />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
