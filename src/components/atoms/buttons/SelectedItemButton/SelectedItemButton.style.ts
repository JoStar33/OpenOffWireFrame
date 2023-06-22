import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

const selectedItemButtonStyles = StyleSheet.create({
  container: {
    width: vw(44),
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#8e8e8e",
  }
});

export { selectedItemButtonStyles };

