import { StyleSheet } from 'react-native';
export const essentialInputStyles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  inputContainer: {
    height: 54,
    borderRadius: 8,
    borderWidth: 1.5
  },
  phoneInputContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#B9B9B9"
  },
  errorText: {
    color: "red",
  },
});