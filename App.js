import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { styles } from "./styles";
import SubsectionComponent from "./src/screens/Subsection";
import Footer from "./src/components/Footer";
import AToZGuideToComeback from "./src/components/AToZGuideToComeback";
import AToZGuideToWorkEthic from "./src/components/AToZGuideToWorkEthic";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Can't Hurt Me</Text>
        <Text style={styles.header}>inspired by David Goggins</Text>
        <StatusBar style="auto" />
        <SubsectionComponent />
      </View>
      <Footer />
    </SafeAreaView>
  );
}
