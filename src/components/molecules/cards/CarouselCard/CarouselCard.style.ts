import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

export const carouselCardStyle = StyleSheet.create({
  container: {
    backgroundColor: "floralwhite",
    borderRadius: 5,
    height: 250,
    padding: 50,
    // marginLeft: vw(3),
    marginRight: vw(3),
  },
  titleText: {
    color: "black",
    fontSize: 30
  }
});