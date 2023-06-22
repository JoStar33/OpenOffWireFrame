import { StyleSheet } from "react-native";
import { vw } from "rxn-units";

const selectBoxButtonStyles = StyleSheet.create({
  container: {
    backgroundColor: "#D9D9D9",
    width: vw(44),
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  selectedText: {
    width: vw(45) - 30,
    fontWeight:'600'
  }
});

export { selectBoxButtonStyles };

