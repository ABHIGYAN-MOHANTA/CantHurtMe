import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";

const AccountabilityMirror = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.marginTopText}>
        Task: Write all your insecurities, dreams, and goals on Post-Its and put
        them on the mirror you look at every morning. You will use this
        accountability mirror to remind yourself of your mission each morning.
      </Text>
      <Text style={styles.text}>
        Mission: If you are trying to lose weight, your first Post-It may be to
        lose two pounds in the first week.Once that goal is achieved, remove the
        note and post the next goal of two to five pounds until your ultimate
        goal is realized.
      </Text>
    </View>
  );
};

export default AccountabilityMirror;
