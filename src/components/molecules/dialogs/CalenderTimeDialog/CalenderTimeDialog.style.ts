import { StyleSheet } from "react-native";
import { mixinStyle } from "styles/mixinStyle";

export const successDialogStyles = StyleSheet.create({
  modalView: {
    ...mixinStyle.dialog,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});