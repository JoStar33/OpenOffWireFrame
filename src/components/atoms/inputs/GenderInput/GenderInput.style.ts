import { StyleSheet } from "react-native";
import { vw } from "rxn-units";
import { mixinStyle } from "styles/mixinStyle";
export const genderInputStyles = StyleSheet.create({
  container: {
    margin: 7,
    width: vw(70),
    flexDirection: "column",
  },
  inputTitle: {
    ...mixinStyle.inputTitle,
    color: "black"
  },
  genderButtonContainer: {
    flexDirection: "row",
  },
  errorText: {
    color: "red",
  },
});
