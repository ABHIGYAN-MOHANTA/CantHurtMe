import AToZGuideToComeback from "../components/AToZGuideToComeback";
import AToZGuideToWorkEthic from "../components/AToZGuideToWorkEthic";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AdditionalScreen() {
  return (
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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"WorkEthic"}
        component={AToZGuideToWorkEthic}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="graph"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
