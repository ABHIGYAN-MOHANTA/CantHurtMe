import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { styles } from "./styles";
import Footer from "./src/components/Footer";
import AToZGuideToComeback from "./src/components/AToZGuideToComeback";
import AToZGuideToWorkEthic from "./src/components/AToZGuideToWorkEthic";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TakingInventory from "./src/components/TakingInventory";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Can't Hurt Me</Text>
        <Text style={styles.header}>inspired by David Goggins</Text>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={"Inventory"} component={TakingInventory} />
            <Tab.Screen name={"Comeback"} component={AToZGuideToComeback} />
            <Tab.Screen name={"WorkEthic"} component={AToZGuideToWorkEthic} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
