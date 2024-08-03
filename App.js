import { View, Text } from "react-native";
import Home from "./screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "./components/HeaderTabs";
export default function App() {
  return (
    <SafeAreaView>
      <HeaderTabs />
    </SafeAreaView>
  );
}
