import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

export const selectBoxListStyles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: vw(43),
    flexDirection: "column",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  }
});