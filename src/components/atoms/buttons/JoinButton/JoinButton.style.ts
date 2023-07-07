import { StyleSheet } from 'react-native';
import { vw } from 'rxn-units';
export const joinButtonStyle = StyleSheet.create({
  absoluteContainer: {
    position: "absolute",
    bottom: 20,
    left: vw(50) - 50
  },
  container: {
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "400"
  }
})