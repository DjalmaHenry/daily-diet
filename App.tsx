import { ThemeProvider } from "styled-components";
import { StatusBar, SafeAreaView } from "react-native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import theme from "./src/theme";
import Home from "@screens/Home";
import Loading from "@components/Loading";
import NewMeal from "@screens/NewMeal";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_200 }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <NewMeal /> : <Loading />}
      </SafeAreaView>
    </ThemeProvider>
  );
}
