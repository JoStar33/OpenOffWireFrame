import { StyleSheet } from "react-native";
import { vw } from "rxn-units";
import { mixinStyle } from "styles/mixinStyle";

export const formInputStyles = StyleSheet.create({
  inputContainer: {
    margin: 7,
    width: vw(70)
  },
  input: {
    ...mixinStyle.input
  },
  inputTitle: {
    ...mixinStyle.inputTitle
  }
});
