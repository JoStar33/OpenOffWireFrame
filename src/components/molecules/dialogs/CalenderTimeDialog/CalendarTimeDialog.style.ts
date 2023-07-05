import { StyleSheet } from "react-native";
import { mixinStyle } from "styles/mixinStyle";

export const calendarTimeDialogStyles = StyleSheet.create({
  modalView: {
    ...mixinStyle.dialog,
  },
  centeredView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    borderRadius: 20,
    marginTop: 22
  },
  calendar: {}
});