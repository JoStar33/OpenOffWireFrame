import { StyleSheet } from 'react-native';
import { vw } from 'rxn-units';
export const authorizeFlowButtonStyles = StyleSheet.create({
  absolutePosition: {
    position: 'absolute',
    bottom: 45,
    left: vw(50) - 175,
  },
  container: {
    width: 350,
    height: 55,
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  },
  label: {
    fontSize: 17,
    fontWeight: "600"
  }
})