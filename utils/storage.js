import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    const json = JSON.stringify(value);
    await AsyncStorage.setItem(`@${key}`, json);
  } catch (e) {
    console.error("Ошибка при сохранении:", e);
  }
};

export const getData = async (key) => {
  try {
    const json = await AsyncStorage.getItem(`@${key}`);
    return json != null ? JSON.parse(json) : null;
  } catch (e) {
    console.error("Ошибка при чтении:", e);
    return null;
  }
};
