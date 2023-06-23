import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

export const userCardStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    width: vw(88),
    paddingVertical: vw(3),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  profileContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  profileImage: {
    width: vw(15),
    height: vw(15),
    borderRadius: 1000
  },
  noneProfile: {
    width: vw(15),
    height: vw(15),
    backgroundColor: "#A4A4A4",
    borderRadius: 1000,
    marginBottom: 2
  },
  nickName: {
    fontWeight: "700",
    color: "black",
    marginBottom: 2
  },
  detailInfo: {
    width: vw(84),
  },
  fieldContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});