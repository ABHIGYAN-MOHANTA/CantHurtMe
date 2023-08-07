import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";

const CookieJar = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.marginTopText}>
        Task: Write down all of your life obstacles, including minor failures,
        that you turned into successes. Feel what it was like to overcome those
        struggles, those opponents, and win. Then get to work!
      </Text>
      <Text style={styles.text}>
        End Goal: The point is to remember what you were once capable of doing
        and channeling that energy to succeed again!
      </Text>
    </View>
  );
};

export default CookieJar;
