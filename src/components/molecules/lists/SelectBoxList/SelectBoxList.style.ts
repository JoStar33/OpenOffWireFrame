import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

export const selectBoxListStyles = StyleSheet.create({
  container: {
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: vw(90),
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  }
});