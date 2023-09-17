import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/views/Home";
import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(20, 39, 110)",
  },
});
