import { Platform, StyleSheet } from "react-native";
import { vh, vw } from "rxn-units";

export const eventCardStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    ...Platform.select({
      ios: {
        width: vw(95),
        height: vh(17),
        marginTop: vh(2),
        padding: vh(2)
      },
      android: {
        width: vw(95),
        height: vh(17),
        marginTop: vh(2),
        padding: vh(2)
      },
      web: {
        width: 320,
        height: "20%",
        marginTop: "2%",
        padding: "2%"
      },
    }),
    flexDirection: "row",
    alignItems: "flex-end"
  },
  image: {
    width: vw(27),
    height: vh(13),
    marginRight: vw(2)
  },
  eventInfo: {
    width: vw(36),
    flexDirection: "column"
  },
  actionContainer: {
    width: vw(25),
    marginTop: vh(2),
    flexDirection: "column",
    alignItems: "flex-end"
  },
  subActionContainer: {
    alignItems: "center",
    marginTop: 2,
    flexDirection: "row"
  }
});
