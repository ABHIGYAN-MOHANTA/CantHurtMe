import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { styles } from "./styles";
import AToZGuideToComeback from "./src/components/AToZGuideToComeback";
import AToZGuideToWorkEthic from "./src/components/AToZGuideToWorkEthic";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TakingInventory from "./src/components/TakingInventory";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TakingInventoryHome from "./src/components/TakingInventoryHome";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Can't Hurt Me</Text>
        <Text style={styles.header}>inspired by David Goggins</Text>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#272829",
              tabBarInactiveTintColor: "#61677A",
              tabBarActiveBackgroundColor: "#61677A",
              tabBarInactiveBackgroundColor: "#272829",
              headerStyle: {
                backgroundColor: "#272829",
              },
              headerTitleStyle: {
                color: "#D8D9DA",
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
          >
            <Tab.Screen
              name="Inventory"
              component={TakingInventoryHome}
              options={{
                tabBarIcon: ({ focused }) => (
                  <MaterialIcons
                    name="inventory"
                    size={24}
                    color={focused ? "#272829" : "#61677A"}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={"Comeback"}
              component={AToZGuideToComeback}
              options={{
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="sword"
                    size={24}
                    color={focused ? "#272829" : "#61677A"}
                  />
                ),
              }}
            />
            <Tab.Screen
              name={"WorkEthic"}
              component={AToZGuideToWorkEthic}
              options={{
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="brain"
                    size={24}
                    color={focused ? "#272829" : "#61677A"}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
