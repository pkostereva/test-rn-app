import ClientList from './clients-list.js';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
});

if (!fontsLoaded) return null;
  return (
    <ClientList />
  );
}
