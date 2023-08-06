// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    color: "#D8D9DA",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  subsection: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "space-around",
    flex: 1,
  },
  subheading: {
    color: "#D8D9DA",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  footer: {
    justifyContent: "flex-end",
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
  },
  button: {
    flex: 1,
    backgroundColor: "#61677A",
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F6F6F6",
    textAlign: "center",
  },
});
