import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TakingInventoryHome from "../components/TakingInventoryHome";
import AccountabilityMirror from "../components/AccountabilityMirror";
import DiscomfortZoneExploitation from "../components/DiscomfortZoneExploitation";
import { FontAwesome5 } from "@expo/vector-icons";
import TakingSouls from "../components/TakingSouls";
import ArmouredMind from "../components/ArmouredMind";
import CookieJar from "../components/CookieJar";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Accountability Mirror"
        component={AccountabilityMirror}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="mirror-variant"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DiscomfortZone Exploitation"
        component={DiscomfortZoneExploitation}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="grav"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Taking Souls"
        component={TakingSouls}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="ghost"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Armoured Mind"
        component={ArmouredMind}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="brain"
              size={24}
              color={focused ? "#272829" : "#61677A"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cookie Jar"
        component={CookieJar}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="cookie-bite"
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
