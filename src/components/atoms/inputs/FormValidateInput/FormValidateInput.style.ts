import { StyleSheet } from "react-native";
import { vw } from "rxn-units";
import { mixinStyle } from "styles/mixinStyle";

export const formValidateInputStyles = StyleSheet.create({
  inputContainer: {
    margin: 7,
    width: vw(70),
    flexDirection: "column"
  },
  input: {
    ...mixinStyle.input
  },
  inputTitle: {
    ...mixinStyle.inputTitle
  },
  errorText: {
    color: "red",
  },
});
