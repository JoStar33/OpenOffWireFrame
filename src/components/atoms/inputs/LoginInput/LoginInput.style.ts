import { StyleSheet } from "react-native";

export const loginInputStyles = StyleSheet.create({
  container: {
    margin: 7,
    flexDirection: "column"
  },
  input: {
    width: 350,
    fontSize: 15,
    borderBottomWidth: 2,
    backgroundColor: "transparent"
  },
  inputTitle: {
    color : "white",
    fontSize: 17,
    marginBottom: 2,
    fontWeight: "800"
  },
  errorText: {
    color: "red",
  },
})