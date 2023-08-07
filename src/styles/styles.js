// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272829",
  },
  header: {
    backgroundColor: "#61677A",
    textAlign: "center",
    fontVariant: "bold",
    color: "#FFF6E0",
    paddingBottom: 20,
  },
  title: {
    backgroundColor: "#61677A",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#D8D9DA",
    paddingTop: 30,
  },
  text: {
    color: "#D8D9DA",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  subsection: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "space-around",
  },
  subheading: {
    color: "#D8D9DA",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
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
    backgroundColor: "#272829",
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
    backgroundColor: "#61677A",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F6F6F6",
    textAlign: "center",
  },
  marginTopText: {
    color: "#D8D9DA",
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
