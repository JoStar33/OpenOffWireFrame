import { StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const phoneCoverStyles = StyleSheet.create({
  viewer: {
    width: vw(100),
    height: vh(100),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 350,
    height: 800,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2
  }
});