import { StyleSheet } from "react-native";

export const phoneAuthButtonStyles = StyleSheet.create({
  container: {
    height: "100%"
  },
  activeButton: {
    width: 80,
    height: 40,
    marginTop: 30,
    marginLeft: 10,
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#FFF",
    borderWidth: 1
  },
  activeLabel: {
    fontSize: 13,
    color: "#FFF",
    fontWeight: "600",
  },
  nonActiveButton: {
    width: 80,
    height: 40,
    marginTop: 30,
    marginLeft: 10,
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#434343"
  },
  nonActiveLabel: {
    fontSize: 13,
    color: "#B9B9B9",
    fontWeight: "600"
  }
});
