import { View, Text } from "react-native";
import Home from "./screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}
