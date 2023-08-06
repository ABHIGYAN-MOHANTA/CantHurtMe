import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View, Text, FlatList } from "react-native";
import { styles } from "../styles/styles.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DATA = [
  { text: "Be Predictable" },
  { text: "Consistency" },
  { text: "Prepare the Night Before" },
  { text: "Do more" },
  { text: 'Subscribe to the "Now" Mentality' },
  { text: "Find Running Mates" },
  { text: 'Don\'t fall for the "Work Smart Only" Concept' },
  { text: "Cut Distractions" },
  { text: "Absolute Focus" },
  { text: "Have a to-do list" },
  { text: "Eat Right" },
  { text: "Plug the leaks" },
  { text: "Cut the fat" },
  { text: "Drop the Perfection" },
  { text: "To avoid burnout, have your own Escape" },
];
const Item = (props) => {
  const { text } = props;

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text}>
          {
            <MaterialCommunityIcons
              name="star-four-points"
              size={24}
              color="#F6F6F6"
            />
          }{" "}
          {text}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const AToZGuideToWorkEthic = () => {
  const renderItem = ({ item }) => <Item text={item.text} />;
  return (
    <View style={styles.subsection}>
      <Text style={styles.subheading}>The A to Z Guide to Work Ethic</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.text}
      />
    </View>
  );
};

export default AToZGuideToWorkEthic;
