import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles.js";
import { Entypo } from "@expo/vector-icons";

const Footer = () => {
  const handleNext = () => {};
  return (
    <View style={styles.footer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.button5]}
          onPress={() => handleNext()}
        >
          <Text style={styles.buttonText}>
            Next {<Entypo name="arrow-bold-right" size={15} color="#F6F6F6" />}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
