import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

export const myEventCardStyles = StyleSheet.create({
  container: {
    width: vw(82),
    borderRadius: 9,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    padding: 18,
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  eventInfoContainer: {
    flexDirection: "column"
  }
});