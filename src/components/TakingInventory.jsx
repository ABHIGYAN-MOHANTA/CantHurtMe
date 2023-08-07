import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/styles.js";

const TakingInventory = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.marginTopText}>
        Task: Write out a list of what is challenging you today. What problems
        and limitations do you encounter? What excuses are you making? Don’t
        hold back. Don’t be nice to yourself.
      </Text>
      <Text style={styles.text}>
        Mission: This list of excuses will fuel your future success.
      </Text>
    </View>
  );
};

export default TakingInventory;
