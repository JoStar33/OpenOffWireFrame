import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const eventCardStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    ...Platform.select({
      ios: {
        width: vw(95),
        height: vh(30),
        marginTop: vh(2),
        padding: vh(2)
      },
      android: {
        width: vw(95),
        height: vh(30),
        marginTop: vh(2),
        padding: vh(2)
      },
      web: {
        width: 320,
        height: "30%",
        marginTop: "2%",
        padding: "2%"
      },
    }),
  },
  image: {
    width: vw(27),
    height: vh(26)
  },
  eventInfo: {
    width: vw(38),
    flexDirection: "column"
  },
  actionContainer: {
    width: vw(27),
    marginTop: vh(2),
    flexDirection: "column",
    alignItems: "flex-end"
  },
});
